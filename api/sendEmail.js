import sgMail from '@sendgrid/mail'

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'mpagan@riwebservices.com',
    from: 'mpagan@riwebservices.com',
    subject: `${req.body.name} | ${req.body.businessName}`,
    text:
      `Name: ${req.body.name}\n` +
      `Business Name: ${req.body.businessName}\n` +
      `Phone: ${req.body.phone}\n` +
      `Email: ${req.body.email}\n` +
      `Message: ${req.body.message}`,
    html:
      `<strong>Name:</strong> ${req.body.name}<br>` +
      `<strong>Business Name:</strong> ${req.body.businessName}<br>` +
      `<strong>Phone:</strong> ${req.body.phone}<br>` +
      `<strong>Email:</strong>: ${req.body.email}<br>` +
      `<strong>Message:</strong> ${req.body.message}<br>`
  }
  await sgMail.send(msg)

  res.json({
    data: req.body,
    apiKey: process.env.SENDGRID_API_KEY
  })
}