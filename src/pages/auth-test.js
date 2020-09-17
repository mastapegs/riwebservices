import React from 'react'
import { Container, Button } from '@material-ui/core'
import { useAuth0 } from '@auth0/auth0-react'

const AuthTest = () => {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0()
  return (
    <>
      <Container>
        <h1>Auth Test</h1>
        <div>
          <Button
            color='primary'
            variant='contained'
            onClick={loginWithRedirect}
          >
            {'Login'}
          </Button>
          <Button
            color='secondary'
            variant='contained'
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            {'Logout'}
          </Button>
        </div>
        <div>
          <h2>User</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <h2>isAuthenticated</h2>
          <pre>{JSON.stringify({ isAuthenticated }, null, 2)}</pre>
          <h2>isLoading</h2>
          <pre>{JSON.stringify({ isLoading }, null, 2)}</pre>
        </div>
      </Container>
    </>
  )
}

export default AuthTest