const handleContactSubmit = async ({
  event,
  name,
  businessName,
  phone,
  email,
  message,
  setName,
  setBusinessName,
  setEmail,
  setPhone,
  setMessage,
}) => {
  event.preventDefault()
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
  setName('')
  setEmail('')
  setBusinessName('')
  setPhone('')
  setMessage('')
}

export default handleContactSubmit