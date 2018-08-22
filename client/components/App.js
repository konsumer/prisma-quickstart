import React from 'react'
import { compose } from 'recompose'
import gql from 'graphql-tag'

// you can also use Query and Mutation components, I just like compose + graphql HOC
import { graphql } from 'react-apollo'

const App = ({ data }) => (<pre>{JSON.stringify(data, null, 2)}</pre>)

const getUsers = gql(`
query getUsers {
  users {
    id
    name
  }
}
`)

export default compose(
  graphql(getUsers)
)(App)
