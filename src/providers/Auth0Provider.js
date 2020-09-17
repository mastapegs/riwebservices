import React, { useEffect } from "react"
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const Auth0Init = () => {
  const { getAccessTokenSilently } = useAuth0()
  useEffect(() => {
    (async () => {
      const value = getAccessTokenSilently()
      console.log({ value })
    })()
  }, [getAccessTokenSilently])
  return (
    <>

    </>
  )
}

const CustomAuth0Provider = ({ children }) => {
  if (typeof window === `undefined`) return (<>{children}</>)
  else return (
    <Auth0Provider
      domain="riwebservices.us.auth0.com"
      clientId="x38koCXqGcJcfZTCEc0aANFbe8FSDe5z"
      redirectUri={window.location.origin}
    >
      <Auth0Init />
      {children}
    </Auth0Provider>
  )
}

export default CustomAuth0Provider