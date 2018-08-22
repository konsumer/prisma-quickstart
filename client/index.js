import React from 'react'
import { render } from 'react-dom'
import { nest } from 'recompose'
import { ApolloProvider } from 'react-apollo'

import client from './apollo-client'
import App from './components/App'

const DataProvider = ({ children }) => (<ApolloProvider client={client}>{children}</ApolloProvider>)

// you can put lots more react matryoshka dolls here
const Stack = nest(
  DataProvider,
  App
)

render(<Stack />, document.getElementById('root'))
