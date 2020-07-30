import React, { useState } from 'react'
import {
  Button,
  Container,
  Typography,
  TextField,
  InputAdornment,
} from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face'
import BusinessIcon from '@material-ui/icons/Business'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import MessageIcon from '@material-ui/icons/Message'
import { makeStyles } from '@material-ui/core/styles'
import handleContactSubmit from '../functions/handleContactSubmission'
import ContactTable from '../components/contactTable'

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

const Contact = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <>
      <div className={classes.heroContent}>
        <ContactTable />
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaceIcon />
                  </InputAdornment>
                ),
              }}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BusinessIcon />
                  </InputAdornment>
                ),
              }}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon />
                  </InputAdornment>
                ),
              }}
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
