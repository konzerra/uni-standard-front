import {AppApi} from "../api/AppApi";

export const ReportApi  = {

  save: `${AppApi.protectedApi}/report`,
  deleteById: `${AppApi.protectedApi}/report/{id}`,
  update: `${AppApi.protectedApi}/report`,

  getById: `${AppApi.publicApi}/report/{id}`,
  getUserReports:`${AppApi.publicApi}/report/all`,
  getPaginated: `${AppApi.publicApi}/report/paginated`,
}
