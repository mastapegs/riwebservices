import sgMail from '@sendgrid/mail'

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'mpagan@riwebservices.com',
    from: 'mpagan@riwebservices.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  await sgMail.send(msg)

  res.json({
    data: req.body,
    apiKey: process.env.SENDGRID_API_KEY
  })
}