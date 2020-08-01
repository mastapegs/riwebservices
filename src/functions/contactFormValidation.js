const contactFormValidation = ({
  name,
  phone,
  email,
  message,
  setNameError,
  setNameHelper,
  setEmailError,
  setEmailHelper,
  setPhoneError,
  setPhoneHelper,
  setMessageError,
  setMessageHelper,
}) => {
  let validationError = false
  if (name === '') {
    validationError = true
    setNameError(true)
    setNameHelper('A name is required')
  } else {
    setNameError(false)
    setNameHelper('')
  }
  if (email === '') {
    validationError = true
    setEmailError(true)
    setEmailHelper('An email is required')
  } else {
    setEmailError(false)
    setEmailHelper('')
  }
  if (phone === '') {
    validationError = true
    setPhoneError(true)
    setPhoneHelper('A phone number is required')
  } else {
    setPhoneError(false)
    setPhoneHelper('')
  }
  if (message === '') {
    validationError = true
    setMessageError(true)
    setMessageHelper('A message is required')
  } else {
    setMessageError(false)
    setMessageHelper('')
  }
  if (validationError) {
    return true
  }
  return false
}

export default contactFormValidation