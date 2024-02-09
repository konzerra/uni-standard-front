import {AppApi} from "../api/AppApi";

export const TipApi  = {

  save: `${AppApi.protectedApi}/tip`,
  deleteById: `${AppApi.protectedApi}/tip/{id}`,
  update: `${AppApi.protectedApi}/tip`,

  getById: `${AppApi.protectedApi}/tip/{id}`,
  getAll: `${AppApi.publicApi}/tip/all`,
  getPaginated: `${AppApi.publicApi}/tip/paginated`,
}
