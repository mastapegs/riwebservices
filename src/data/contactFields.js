import React from 'react'
import FaceIcon from '@material-ui/icons/Face'
import BusinessIcon from '@material-ui/icons/Business'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import MessageIcon from '@material-ui/icons/Message'

const fields = [
  {
    label: 'Name',
    fieldName: 'name',
    icon: <FaceIcon />,
  },
  {
    label: 'Business Name',
    fieldName: 'businessName',
    icon: <BusinessIcon />,
    required: false,
  },
  {
    label: 'Phone Number',
    fieldName: 'phone',
    icon: <PhoneIcon />,
  },
  {
    label: 'Email Address',
    fieldName: 'email',
    icon: <EmailIcon />,
  },
  {
    label: 'Message',
    fieldName: 'message',
    icon: <MessageIcon />,
    multiline: true,
    rows: 6,
  },
]

export default fields