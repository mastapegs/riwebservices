import React from 'react'
import { Container } from '@material-ui/core'
import { useQuery, gql } from '@apollo/client'

const CONTINENTS_AND_COUNTRIES = gql`
{
  continents{
    code
    name
    countries{
      code
      name
    }
  }
}
`

const GraphQLTest = () => {
  const { loading, error, data } = useQuery(CONTINENTS_AND_COUNTRIES)
  return (
    <>
      <Container>
        <h1>Testing Apollo Client</h1>
        {(() => {
          if (loading) return <p>Loading...</p>
          if (error) return (
            <>
              {console.log(JSON.stringify(error))}
              <p>Error...</p>
            </>
          )
          return (
            <>
              {console.log(data)}
              <h2>List of Continents</h2>
              <ul>
                {data.continents.map(({ name }) => (<li>{name}</li>))}
              </ul>
            </>
          )
        })()}
      </Container>
    </>
  )
}

export default GraphQLTest