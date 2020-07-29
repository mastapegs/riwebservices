import sgMail from '@sendgrid/mail'

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'mpagan@riwebservices.com',
    from: req.body.email,
    subject: `${req.body.name} | ${req.body.businessName}`,
    text:
      `Name: ${req.body.name}\n` +
      `Email: ${req.body.email}\n` +
      `Phone: ${req.body.phone}\n` +
      `Business Name: ${req.body.businessName}\n` +
      `Message: ${req.body.message}`,
    html:
      `Name: ${req.body.name}\n` +
      `Email: ${req.body.email}\n` +
      `Phone: ${req.body.phone}\n` +
      `Business Name: ${req.body.businessName}\n` +
      `Message: ${req.body.message}`
  }
  await sgMail.send(msg)

  res.json({
    data: req.body,
    apiKey: process.env.SENDGRID_API_KEY
  })
}