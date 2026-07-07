import { planes, miembros } from "./datos.js";

export const resolvers = {
  Query: {
    planes: (_, { precioMaximo }) => {
      if (precioMaximo !== undefined && precioMaximo !== null) {
        return planes.filter(plan => plan.precio <= precioMaximo);
      }
      return planes;
    },
    plan: (_, { id }) => planes.find(plan => plan.id === id),
    miembros: (_, { edadMinima }) => {
      if (edadMinima !== undefined && edadMinima !== null) {
        return miembros.filter(miembro => miembro.edad >= edadMinima);
      }
      return miembros;
    },
    miembro: (_, { id }) => miembros.find(miembro => miembro.id === id)
  },
  Plan: {
    miembros: (parent) => miembros.filter(miembro => miembro.planId === parent.id)
  },
  Miembro: {
    plan: (parent) => planes.find(plan => plan.id === parent.planId)
  },
  Mutation: {
    crearPlan: (_, { nombre, precio, duracionMeses }) => {
      const nuevoPlan = {
        id: String(planes.length + 1),
        nombre,
        precio,
        duracionMeses
      };
      planes.push(nuevoPlan);
      return nuevoPlan;
    },
    crearMiembro: (_, { nombre, edad, planId }) => {
      const nuevoMiembro = {
        id: String(miembros.length + 1),
        nombre,
        edad,
        planId
      };
      miembros.push(nuevoMiembro);
      return nuevoMiembro;
    },
    eliminarMiembro: (_, { id }) => {
      const index = miembros.findIndex(miembro => miembro.id === id);
      if (index === -1) {
        return false;
      }
      miembros.splice(index, 1);
      return true;
    }
  }
};
