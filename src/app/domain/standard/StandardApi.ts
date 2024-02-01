import {AppApi} from "../api/AppApi";

export const StandardApi  = {

  save: `${AppApi.protectedApi}/standard`,
  deleteById: `${AppApi.protectedApi}/standard/{id}`,
  update: `${AppApi.protectedApi}/standard`,

  getById: `${AppApi.protectedApi}/standard/{id}`,
  getAll:`${AppApi.publicApi}/standard/all`,
  getPaginated: `${AppApi.publicApi}/standard/paginated`,
  getPaginatedWithReports: `${AppApi.publicApi}/standard/reports/paginated`,

  getAllPublishedWithReports: `${AppApi.publicApi}/standard/with-reports`
}
