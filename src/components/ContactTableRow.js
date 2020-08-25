import React from 'react'
import {
  TableRow,
  TableCell,
  Button,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  links: {
    color: 'inherit',
    textDecoration: 'inherit'
  }
})

const ContactTableRow = ({ contactType, contactScheme, contactData }) => {
  const classes = useStyles()
  return (
    <>
      <TableRow key={contactType}>
        <TableCell>
          <Typography>
            {contactType}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            <a
              className={classes.links}
              href={`${contactScheme}:${contactData}`}
            >
              <Button>
                {contactData}
              </Button>
            </a>
          </Typography>
        </TableCell>
      </TableRow>
    </>
  )
}

export default ContactTableRow
