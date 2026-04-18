import { readJson } from "../utils/readJson"
import type { ProfileResult } from '../../generated/graphql'


export const profileResolvers={

 
  ProfileResult: {
    __resolveType(obj: ProfileResult) {
      if ('message' in obj) {
        return 'ProfileError'
      }

      return 'ProfileValue'
    }
  },

    Query:{
        profile:()=>readJson("profile")
    }

}