import React, { useReducer } from 'react'
import {
  InputAdornment,
  Backdrop,
} from '@material-ui/core'

const useContactForm = () => {

  const ACTIONS = {
    ON_CHANGE: 'on-change',
    RESET_FORM: 'reset-form',
    SET_FIELD_ERROR: 'field-error',
    SUBMIT_DISABLED: 'set-submit-state',
    MODAL_OPEN: 'set-modal-open-state',
  }
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
  const contactFormInitialState = {
    formFields: { ...initialFormFields },
    fieldErrors: { ...initialErrors },
    errorHelpers: { ...initialErrorHelpers },
    submitDisabled: false,
    modalIsOpen: false,
  }
  const contactFormReducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ON_CHANGE:
        return {
          ...state,
          formFields: {
            ...state.formFields,
            [action.payload.field]: action.payload.value,
          },
        }
      case ACTIONS.RESET_FORM:
        return {
          ...state,
          formFields: { ...initialFormFields }
        }
      case ACTIONS.SET_FIELD_ERROR:
        return {
          ...state,
          fieldErrors: {
            ...state.fieldErrors,
            [action.payload.field]: action.payload.error,
          },
          errorHelpers: {
            ...state.errorHelpers,
            [action.payload.field]: action.payload.error ? errorHelperMessages[action.payload.field] : initialErrorHelpers[action.payload.field],
          }
        }
      case ACTIONS.SUBMIT_DISABLED:
        return {
          ...state,
          submitDisabled: action.payload,
        }
      case ACTIONS.MODAL_OPEN:
        return {
          ...state,
          modalIsOpen: action.payload
        }
      default:
        return {
          ...state,
        }
    }
  }
  const [contactFormState, formDispatch] = useReducer(contactFormReducer, contactFormInitialState)

  const onChange = e => {
    e.persist()
    formDispatch({ type: ACTIONS.ON_CHANGE, payload: { field: e.target.name, value: e.target.value } })
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const {
      name,
      businessName,
      phone,
      email,
      message,
    } = contactFormState.formFields

    if (validationFailed()) return

    formDispatch({ type: ACTIONS.SUBMIT_DISABLED, payload: true })

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
        message,
      })
    }).catch(error => console.log(error))
    if (response) {
      const data = await response.json()
      console.log(data)
    }

    formDispatch({ type: ACTIONS.MODAL_OPEN, payload: true })
  }

  const validationFailed = () => {
    let error = false
    const { formFields, fieldErrors } = contactFormState
    for (const field in formFields) {
      if (fieldErrors.hasOwnProperty(field)) {
        if (!formFields[field]) {
          error = true
          formDispatch({ type: ACTIONS.SET_FIELD_ERROR, payload: { field, error: true } })
        } else {
          formDispatch({ type: ACTIONS.SET_FIELD_ERROR, payload: { field, error: false } })
        }
      }
    }
    return error
  }

  const onModalClose = () => {
    formDispatch({ type: ACTIONS.MODAL_OPEN, payload: false })
    formDispatch({ type: ACTIONS.RESET_FORM })
    formDispatch({ type: ACTIONS.SUBMIT_DISABLED, payload: false })
  }

  // Data comes from ./src/data/contactFields.js
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
      value: contactFormState.formFields[fieldName],
      error: contactFormState.fieldErrors[fieldName],
      helperText: contactFormState.errorHelpers[fieldName],
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
    disabled: contactFormState.submitDisabled,
  }

  const modalProps = {
    open: contactFormState.modalIsOpen,
    closeAfterTransition: true,
    onClose: onModalClose,
    BackdropComponent: Backdrop,
    BackdropProps: {
      timeout: 500,
    },
  }

  const modalBodyProps = () => ({
    name: contactFormState.formFields.name,
    email: contactFormState.formFields.email,
    open: contactFormState.modalIsOpen,
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
    submitDisabled: contactFormState.submitDisabled,
  }
}

export default useContactForm