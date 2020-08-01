import contactFormValidation from '../functions/contactFormValidation'

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

  let validationError = contactFormValidation({
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