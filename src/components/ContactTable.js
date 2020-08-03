import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Card,
  Container,
  Typography,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  links: {
    color: 'inherit',
    textDecoration: 'inherit'
  }
})

const useContactData = () => ([
  {
    contactType: 'Phone',
    contactData: '401-332-7084',
    contactScheme: 'tel'
  },
  {
    contactType: 'Email',
    contactData: 'mpagan@riwebservices.com',
    contactScheme: 'mailto'
  },
])

const ContactTable = () => {
  const classes = useStyles()
  const contactData = useContactData()
  return (
    <>
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
                {contactData.map(({
                  contactType,
                  contactData,
                  contactScheme
                }) => (
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
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </>
  )
}

export default ContactTable
