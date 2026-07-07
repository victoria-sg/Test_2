import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./esquema.js";
import { resolvers } from "./resolvedores.js";

import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({
      embed: {
        document: `query ObtenerDatosGimnasio {
  miembros {
    nombre
    edad
    plan {
      nombre
      precio
    }
  }
  planes {
    nombre
    precio
    duracionMeses
  }
}`
      }
    })
  ]
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Servidor de Gimnasio listo en: ${url}`);
