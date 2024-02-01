import {AppApi} from "../api/AppApi";


export const UserApi =  {
  getAll: `${AppApi.publicApi}/user/all`,
  update: `${AppApi.protectedApi}/user`,

}
