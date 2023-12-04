import {AppApi} from "../api/AppApi";

export const StandardApi  = {

  save: `${AppApi.protectedApi}/standard`,
  deleteById: `${AppApi.protectedApi}/standard/{id}`,
  update: `${AppApi.protectedApi}/standard`,

  getAll:`${AppApi.publicApi}/standard/all`,
  getPaginated: `${AppApi.publicApi}/standard/paginated`,
}
