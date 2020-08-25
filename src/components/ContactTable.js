import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Card,
  Container,
  Typography,
} from '@material-ui/core'
import ContactTableRow from './ContactTableRow'

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
                    <ContactTableRow
                      contactData={contactData}
                      contactType={contactType}
                      contactScheme={contactScheme}
                    />
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
