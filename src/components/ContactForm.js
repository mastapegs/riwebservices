import React, { useState } from 'react'
import {
  Button,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Modal,
  Card,
  Fade,
  Backdrop,
  CardContent,
  CardHeader,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FaceIcon from '@material-ui/icons/Face'
import BusinessIcon from '@material-ui/icons/Business'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import MessageIcon from '@material-ui/icons/Message'
import handleContactSubmit from '../functions/handleContactSubmission'

const useStyles = makeStyles(theme => ({
  form: {
    width: '80%',
    margin: 'auto',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  modal: {
    width: '80%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 0,
  },
  typography: {
    marginBottom: theme.spacing(3)
  }
}))

const handleFormModalClose = (e, setOpen, setName, setBusinessName, setPhone, setEmail, setMessage, setIsDisabled) => {
  setName('')
  setEmail('')
  setBusinessName('')
  setPhone('')
  setMessage('')
  setOpen(false)
  setIsDisabled(false)
}

const ContactForm = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <>
      <Container>
        <Typography gutterBottom component='h2' variant='h2' align='center'>
          {'Start the Conversation'}
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
            setOpen,
            setIsDisabled,
          }
        )}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
            disabled={isDisabled}
          >
            {'Submit'}
          </Button>
        </form>
        <Modal
          open={open}
          onClose={(e) => handleFormModalClose(
            e,
            setOpen,
            setName,
            setBusinessName,
            setPhone,
            setEmail,
            setMessage,
            setIsDisabled
          )}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Card
              className={classes.modal}
            >
              <CardHeader
                title={`😀 Thank you for reaching out to me ${name}!`}
              />
              <CardContent>
                <Typography gutterBottom className={classes.typography}>
                  {`Your message has been emailed to me at `}
                  <strong>mpagan@riwebservices.com</strong>
                </Typography>
                <Typography gutterBottom className={classes.typography}>
                  {`📧 I'll make sure to email you back at `}
                  <strong>{email}</strong>
                </Typography>
                <Typography gutterBottom className={classes.typography}>
                  {`I look forward to our conversation together`}
                </Typography>
              </CardContent>
            </Card>
          </Fade>
        </Modal>
      </Container>
    </>
  )
}

export default ContactForm
