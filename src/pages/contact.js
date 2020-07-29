import React from 'react'
import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}))

const Contact = () => {
  const classes = useStyles()
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
        </Container>
        <TableContainer>
          <Table>
            <TableHead>

            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography>
                    Phone
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {'401-332-7084'}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography>
                    Email
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {'mpagan@riwebservices.com'}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default Contact
