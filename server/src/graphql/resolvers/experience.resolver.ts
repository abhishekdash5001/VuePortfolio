import { readJson } from "../utils/readJson"
import type { ExperienceResult } from '../../generated/graphql'


export const experienceResolver={

 
    ExperienceResult: {
    __resolveType(obj: ExperienceResult) {
      if ('message' in obj) {
        return 'ExperienceError'
      }

      return 'ExperienceValue'
    }
  },

    Query:{
        experience:()=>{
            
            return {
                experience:readJson("experience")
            }
        }
    }

}