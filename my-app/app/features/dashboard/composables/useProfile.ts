import { fromPromise } from "neverthrow";

import { fetchProfile } from "~/datasource/getProfile";

import  { type Profile,ERRORS } from "../types";

interface ProfileResult {
  state: Profile | null;
  execute: () => Promise<void>;
  loading: Ref<boolean>;
  error: Ref<string>;
  completed:Ref<boolean>
}

const defaultState:Profile={
  name: "",
  title:'',
  shortBio:'',
  bio:'',
  social:{
    linkedin:'',
    github:''
  },
  image:{
    alt:'',
    url:''
  }
}

export function useProfile(): ProfileResult {
  const error = ref<string>("");
  const toast = useToast()
  const loading = ref(false);
  const completed = ref(false);

  const state = reactive<Profile>({...defaultState});

  async function execute() {
    loading.value = true;

    const result = await fromPromise(
      fetchProfile().then((res) => res.data.profile),

      (e) => e as Error,
    );

    if(result.isErr()){
      error.value=ERRORS.profile
      toast.add({
        title: 'Error',
        description: error.value,
        color: 'error'
      })
    }

    if (result.isOk()) {
      Object.assign(state, result.value);
      completed.value = true
    }

    loading.value = false;
  }

  return {
    state,
    execute,
    loading,
    error,
    completed
  };
}
