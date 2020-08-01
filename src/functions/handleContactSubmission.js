const validate = ({
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
  }
  if (email === '') {
    validationError = true
    setEmailError(true)
    setEmailHelper('An email is required')
  }
  if (phone === '') {
    validationError = true
    setPhoneError(true)
    setPhoneHelper('A phone number is required')
  }
  if (message === '') {
    validationError = true
    setMessageError(true)
    setMessageHelper('A message is required')
  }
  if (validationError) {
    return true
  }
  return false
}

const handleContactSubmit = async ({
  event,
  name,
  businessName,
  phone,
  email,
  message,
  setName,
  setNameError,
  setNameHelper,
  setBusinessName,
  setEmail,
  setEmailError,
  setEmailHelper,
  setPhone,
  setPhoneError,
  setPhoneHelper,
  setMessage,
  setMessageError,
  setMessageHelper,
  setOpen,
  setIsDisabled,
}) => {
  event.preventDefault()

  let validationError = validate({
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
  })
  if (validationError) return

  setIsDisabled(true)

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

  setOpen(true)
}

export default handleContactSubmit