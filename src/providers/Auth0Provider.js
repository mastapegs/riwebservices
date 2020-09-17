import React from "react"
import { Auth0Provider } from "@auth0/auth0-react";

const CustomAuth0Provider = ({ children }) => {
  if (!window) return (<>{children}</>)
  return (
    <Auth0Provider
      domain="riwebservices.us.auth0.com"
      clientId="x38koCXqGcJcfZTCEc0aANFbe8FSDe5z"
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  )
}

export default CustomAuth0Provider