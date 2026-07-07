export const typeDefs = `#graphql
  type Plan {
    id: ID!
    nombre: String!
    precio: Float!
    duracionMeses: Int!
    miembros: [Miembro!]!
  }

  type Miembro {
    id: ID!
    nombre: String!
    edad: Int!
    planId: ID!
    plan: Plan!
  }

  type Query {
    planes(precioMaximo: Float): [Plan!]!
    plan(id: ID!): Plan
    miembros(edadMinima: Int): [Miembro!]!
    miembro(id: ID!): Miembro
  }

  type Mutation {
    crearPlan(nombre: String!, precio: Float!, duracionMeses: Int!): Plan!
    crearMiembro(nombre: String!, edad: Int!, planId: ID!): Miembro!
    eliminarMiembro(id: ID!): Boolean!
  }
`;
