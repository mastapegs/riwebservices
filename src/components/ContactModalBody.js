import React from 'react'
import {
  Fade,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  modal: {
    width: '80%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 0,
  },
})

const ContactModalBody = (props) => {
  const {
    name,
    email,
    open,
  } = props
  const classes = useStyles()
  return (
    <>
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
    </>
  )
}

export default ContactModalBody
