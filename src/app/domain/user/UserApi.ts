import {AppApi} from "../api/AppApi";


export const UserApi =  {
  update: `${AppApi.protectedApi}/user`,


  //mostly admin usage
  getPaginated: `${AppApi.protectedApi}/user/paginated`,
  saveByAdmin:`${AppApi.protectedApi}/user/admin/save`,
  updateByAdmin:`${AppApi.protectedApi}/user/admin/update`,
  deleteById:`${AppApi.protectedApi}/user/{id}`,
  getById:`${AppApi.protectedApi}/user/{id}`
}
