import React, { useState } from 'react'
import {
  InputAdornment,
  Backdrop,
} from '@material-ui/core'

const useContactForm = () => {
  const initialFormFields = {
    name: '',
    businessName: '',
    phone: '',
    email: '',
    message: '',
  }
  const initialErrors = {
    name: false,
    phone: false,
    email: false,
    message: false,
  }
  const initialErrorHelpers = {
    name: '',
    phone: '',
    email: '',
    message: '',
  }
  const errorHelperMessages = {
    name: 'A name is required',
    phone: 'A phone number is required',
    email: 'An email is required',
    message: 'A message is required',
  }
  const [formFields, setFormFields] = useState(initialFormFields)
  const [fieldErrors, setFieldErrors] = useState(initialErrors)
  const [errorHelpers, setErrorHelpers] = useState(initialErrorHelpers)
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const onChange = e => {
    e.persist()
    setFormFields(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const resetForm = () => {
    setFormFields({
      ...initialFormFields
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const {
      name,
      businessName,
      phone,
      email,
      message,
    } = formFields
    setSubmitDisabled(true)
    if (validationFailed()) return

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        name,
        businessName,
        phone,
        email,
        message
      })
    }).catch(error => console.log(error))
    if (response) {
      const data = await response.json()
      console.log(data)
    }

    setModalIsOpen(true)
  }

  const validationFailed = () => {
    let error = false
    for (const field in formFields) {
      if (fieldErrors.hasOwnProperty(field)) {
        if (!formFields[field]) {
          error = true
          setFieldErrors(prevState => ({
            ...prevState,
            [field]: true,
          }))
          setErrorHelpers(prevState => ({
            ...prevState,
            [field]: errorHelperMessages[field]
          }))
        } else {
          setFieldErrors(prevState => ({
            ...prevState,
            [field]: false,
          }))
          setErrorHelpers(prevState => ({
            ...prevState,
            [field]: initialErrorHelpers[field]
          }))
        }
      }
    }
    return error
  }

  const onModalClose = () => {
    setModalIsOpen(false)
    resetForm()
    setSubmitDisabled(false)
  }

  const textFieldProps = ({
    fieldName,
    icon = null,
    label,
    required = true,
    multiline = false,
    rows = 1,
  }) => {
    const fieldProps = {
      label: label,
      required: required,
      multiline: multiline,
      rows: rows,
      id: fieldName,
      name: fieldName,
      value: formFields[fieldName],
      error: fieldErrors[fieldName],
      helperText: errorHelpers[fieldName],
      onChange,
    }
    if (icon) {
      fieldProps.InputProps = {
        startAdornment: (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ),
      }
    }
    return fieldProps
  }

  const submitButtonProps = {
    type: "submit",
    disabled: submitDisabled,
  }

  const modalProps = {
    open: modalIsOpen,
    closeAfterTransition: true,
    onClose: onModalClose,
    BackdropComponent: Backdrop,
    BackdropProps: {
      timeout: 500,
    },
  }

  const modalBodyProps = () => ({
    name: formFields.name,
    email: formFields.email,
    open: modalIsOpen,
  })

  const formProps = {
    noValidate: true,
    onSubmit,
  }

  return {
    textFieldProps,
    submitButtonProps,
    modalProps,
    modalBodyProps,
    formProps,
  }
}

export default useContactForm