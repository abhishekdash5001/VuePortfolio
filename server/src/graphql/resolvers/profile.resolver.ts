import { readJson } from "../utils/readJson"



export const profileResolvers={

    Query:{
        profile:()=>readJson("profile")
    }

}