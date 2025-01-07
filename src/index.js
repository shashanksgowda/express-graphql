// index.js
const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { schema, rootValue } = require('./schema');

const app = express();
const port = 4000;

// Set up the /graphql endpoint
app.use(
  '/graphql',
  createHandler({
    schema,
    rootValue,
    graphiql: true, // Enables the GraphiQL UI for testing queries
  })
);

app.listen(port, () => {
  console.log(`GraphQL server running at http://localhost:${port}/graphql`);
});
