import 'dotenv/config'
import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from 'prisma-binding'
import Bundler from 'parcel-bundler'
import express from 'express'

import * as resolvers from './resolvers'

const PORT = process.env.PORT || 8000
const DEBUG = process.env.NODE_ENV !== 'production'
const PRISMA_ENDPOINT = process.env.PRISMA_ENDPOINT || 'http://localhost:4466'
const NODE_ENV = process.env.NODE_ENV || 'development'

const prisma = new Prisma({
  typeDefs: `${__dirname}/../prisma/generated.graphql`,
  endpoint: PRISMA_ENDPOINT
})

const server = new GraphQLServer({
  typeDefs: `${__dirname}/schema.graphql`,
  resolvers,

  resolverValidationOptions: {
    requireResolversForResolveType: false
  },

  context: req => ({
    ...req,
    prisma,
    db: prisma // alias
  })
})

const bundler = new Bundler(`${__dirname}/../client/index.html`)
server.express.get('/*', bundler.middleware())

if (NODE_ENV === 'production') {
  server.express.get('/*', express.static('public'))
}

server.start({
  endpoint: '/graphql',
  playground: false,
  port: PORT,
  degug: DEBUG,
  tracing: DEBUG
}, () => console.log(`
🚀 Server is running on http://localhost:${PORT}

Run 'npm run playground' to run a local playground
Run 'npm run deploy' to update the database with your schema (defined in prisma/)

`))
