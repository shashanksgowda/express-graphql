// schema.js
const { buildSchema } = require('graphql');

// Define the schema
const schema = buildSchema(`
  type User {
    id: ID
    name: String
    email: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(name: String, email: String): User
  }
`);

// In-memory data store
const users = [
  { id: '1', name: 'Alice', email: 'alice@example.com' },
  { id: '2', name: 'Bob', email: 'bob@example.com' },
  { id: '3', name: 'John', email: 'john@example.com' },
];

// Define resolvers
const rootValue = {
  users: () => users,
  user: ({id}) => users.find(user => user.id === id),
  addUser: ({ name, email }) => {
    const newUser = { id: (users.length + 1).toString(), name, email };
    users.push(newUser);
    return newUser;
  },
};

module.exports = { schema, rootValue };
