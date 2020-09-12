import React from 'react'
import {
  Container,
  Typography,
  TextField,
  Button,
  Modal,
} from '@material-ui/core'
import useContactForm from '../hooks/useContactForm'
import fields from '../data/contactFields'
import ContactModalBody from './ContactModalBody'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  form: {
    width: '80%',
    margin: 'auto',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const ContactForm = () => {
  const classes = useStyles()
  const {
    textFieldProps,
    submitButtonProps,
    modalProps,
    modalBodyProps,
    formProps,
  } = useContactForm()

  return (
    <>
      <Container>
        <Typography gutterBottom component='h2' variant='h2' align='center'>
          {'Start the Conversation'}
        </Typography>
        <form {...formProps} className={classes.form}>
          {fields.map(field => (
            <TextField
              {...textFieldProps({ ...field, })}
              variant="outlined"
              margin="normal"
              size="small"
              fullWidth
            />
          ))}
          <Button
            {...submitButtonProps}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {'Submit'}
          </Button>
        </form>
        <Modal
          {...modalProps}
        >
          <div><ContactModalBody {...modalBodyProps()} /></div>
        </Modal>
      </Container>
    </>
  )
}

export default ContactForm
