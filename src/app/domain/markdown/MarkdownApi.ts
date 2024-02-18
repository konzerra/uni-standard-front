import {AppApi} from "../api/AppApi";


export const MarkdownApi = {

  save: `${AppApi.protectedApi}/markdown`,
  deleteById: `${AppApi.protectedApi}/markdown/{id}`,
  update: `${AppApi.protectedApi}/markdown`,


  getAll: `${AppApi.publicApi}/markdown/all`,
  getByIdFull: `${AppApi.protectedApi}/markdown/full/{id}`,
  getById: `${AppApi.publicApi}/markdown/{id}`,
  getPaginated: `${AppApi.protectedApi}/markdown/paginated`,

}
