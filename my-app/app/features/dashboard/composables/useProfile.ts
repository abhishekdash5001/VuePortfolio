import { fromPromise } from "neverthrow";

import { fetchProfile } from "~/datasource/getProfile";

import type { Profile } from "../types";

interface ProfileResult {
  state: Profile | null;
  execute: () => Promise<void>;
  loading: Ref<boolean>;
  error: Ref<string>;
}

const defaultState:Profile={
  name: "",
  title:'',
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
  const loading = ref(false);

  const state = reactive<Profile>({...defaultState});

  async function execute() {
    loading.value = true;

    const result = await fromPromise(
      fetchProfile().then((res) => res.data.profile),

      (e) => e as Error,
    );

    if (result.isOk()) {
      Object.assign(state, result.value);
    }

    loading.value = false;
  }

  return {
    state,
    execute,
    loading,
    error,
  };
}
