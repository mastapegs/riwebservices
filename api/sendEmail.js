import sgMail from '@sendgrid/mail'

const send = async ({
  name,
  businessName,
  phone,
  email,
  message,
}) => {

  return false

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: 'mpagan@riwebservices.com',
    from: 'mpagan@riwebservices.com',
    subject: `${name} | ${businessName}`,
    text:
      `Name: ${name}\n` +
      `Business Name: ${businessName}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Message: ${message}`,
    html:
      `<strong>Name:</strong> ${name}<br>` +
      `<strong>Business Name:</strong> ${businessName}<br>` +
      `<strong>Phone:</strong> ${phone}<br>` +
      `<strong>Email:</strong>: ${email}<br>` +
      `<strong>Message:</strong> ${message}<br>`
  }

  let emailSuccess = true
  await sgMail.send(msg).catch(error => {
    console.log(error)
    emailSuccess = false
  })
  return emailSuccess

}

const sendEmail = async (req, res) => {

  const {
    name,
    businessName,
    phone,
    email,
    message,
  } = req.body

  let emailSuccess = false
  emailSuccess = await send({
    name,
    businessName,
    phone,
    email,
    message,
  })

  res.json({
    data: req.body,
    emailSuccess
  })

}

export default sendEmail