Here is a quick-start to prisma + graphql-server + react + apollo-react.

## get started

```
git clone git@github.com:konsumer/prisma-quickstart.git --depth 1 MYPROJECT
cd MYPROJECT
npm i
npm run setup
npm start

# in another tab
npm run playground
```

## other tools

* `docker-compose up` - run a local prisma + postgres server
* `npm run playground` - get a nice GraphQL playground to mess with your service and prisma, directly
* `npm run lint` - check your codse and schema
* `npm run reset` - wipe your database
* `npm run deploy` - send your updated schema to prisma
* `npm run seed` - seed your demo-data in prisma