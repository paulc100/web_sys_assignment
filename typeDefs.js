import aserver from "apollo-server";

const { gql } = aserver;

export const typeDefs = gql`
  type Note {
    id: ID!
    title: String!
    description: String!
    tag: String
    date: String
    image: String
  }

  type Query {
    getAllNotes: [Note]
    getNoteById(id: ID!): Note
    getNoteByTitle(title: String!): [Note]
    getNoteByTag(tag: String!): [Note]
    getNoteByDate(date: String!): [Note]
  }

  type Mutation {
    createNote(title: String!, description: String!, image: String): Note!
    updateNote(id: ID!, image: String): Note!
  }
`;




// type Mutation {
//   updateNote(id: String!, title: String!, description: String!) {
//     id
//     title
//     description
//   }
// }