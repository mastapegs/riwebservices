import React, { useState } from 'react'
// import sgMail from '@sendgrid/mail'
import {
  Button,
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Card,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  form: {
    width: '80%',
    margin: 'auto',
  },
  formContent: {
    padding: theme.spacing(8, 0, 6),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const useContactData = () => ([
  {
    contactType: 'Phone',
    contactData: '401-332-7084',
  },
  {
    contactType: 'Email',
    contactData: 'mpagan@riwebservices.com',
  },
])

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

const Contact = () => {
  const classes = useStyles()
  const contactData = useContactData()
  const [name, setName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Let's Talk
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Whether you have questions on how my services can help your business grow, or simply want to talk about your online web presence, it would be my pleasure to speak with you.
          </Typography>
          <Card>
            <TableContainer>
              <Table>
                <TableHead>

                </TableHead>
                <TableBody>
                  {contactData.map(({ contactType, contactData }) => (
                    <TableRow>
                      <TableCell>
                        <Typography>
                          {contactType}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>
                          {contactData}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Container>
      </div>
      <div className={classes.formContent}>
        <Container>
          <Typography gutterBottom component='h2' variant='h2' align='center'>
            {'Fill out this form to start the conversation'}
          </Typography>
          <form className={classes.form} noValidate onSubmit={event => handleContactSubmit(
            {
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
            }
          )}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="businessName"
              label="Business Name"
              name="businessName"
              value={businessName}
              onChange={event => setBusinessName(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              value={phone}
              onChange={event => setPhone(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              multiline
              rows={6}
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {'Submit'}
            </Button>
          </form>
        </Container>
      </div>
    </>
  )
}

export default Contact
