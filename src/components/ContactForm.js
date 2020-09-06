import React, { useState } from 'react'
import {
  Button,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Modal,
  Backdrop,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FaceIcon from '@material-ui/icons/Face'
import BusinessIcon from '@material-ui/icons/Business'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import MessageIcon from '@material-ui/icons/Message'
import handleContactSubmit from '../functions/handleContactSubmission'
import ContactModalBody from './ContactModalBody'

const useStyles = makeStyles(theme => ({
  form: {
    width: '80%',
    margin: 'auto',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  typography: {
    marginBottom: theme.spacing(3)
  }
}))

const handleFormModalClose = ({
  e,
  setOpen,
  setName,
  setNameError,
  setNameHelper,
  setBusinessName,
  setPhone,
  setPhoneError,
  setPhoneHelper,
  setEmail,
  setEmailError,
  setEmailHelper,
  setMessage,
  setMessageError,
  setMessageHelper,
  setIsDisabled
}) => {
  setName('')
  setNameError(false)
  setNameHelper('')
  setEmail('')
  setEmailError(false)
  setEmailHelper('')
  setBusinessName('')
  setPhone('')
  setPhoneError(false)
  setPhoneHelper('')
  setMessage('')
  setMessageError(false)
  setMessageHelper('')
  setOpen(false)
  setIsDisabled(false)
}

const ContactForm = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [nameHelper, setNameHelper] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState(false)
  const [phoneHelper, setPhoneHelper] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [emailHelper, setEmailHelper] = useState('')
  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState(false)
  const [messageHelper, setMessageHelper] = useState('')
  const [open, setOpen] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <>
      <Container>
        <Typography gutterBottom component='h2' variant='h2' align='center'>
          {'Start the Conversation'}
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={event => handleContactSubmit(
            {
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
            }
          )}>
          <TextField
            variant="outlined"
            margin="normal"
            size="small"
            required
            error={nameError}
            helperText={nameHelper}
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
            error={phoneError}
            helperText={phoneHelper}
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
            error={emailError}
            helperText={emailHelper}
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
            error={messageError}
            helperText={messageHelper}
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
          onClose={(e) => handleFormModalClose({
            e,
            setOpen,
            setName,
            setNameError,
            setNameHelper,
            setBusinessName,
            setPhone,
            setPhoneError,
            setPhoneHelper,
            setEmail,
            setEmailError,
            setEmailHelper,
            setMessage,
            setMessageError,
            setMessageHelper,
            setIsDisabled,
          })}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <div><ContactModalBody name={name} email={email} open={open} /></div>
        </Modal>
      </Container>
    </>
  )
}

export default ContactForm
