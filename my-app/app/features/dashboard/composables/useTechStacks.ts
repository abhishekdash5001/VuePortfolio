import { fromPromise } from "neverthrow";

import { fetchTechStack } from "~/datasource/getTechStack";

import type { TechStackValue } from "../types";

interface TechStackResult {
  state: TechStackValue ;
  execute: () => Promise<void>;
  loading: Ref<boolean>;
  error: Ref<string>;
  completed:Ref<boolean>
}

const defaultState:TechStackValue={
 stacks:[]
}

export function useTechStacks(): TechStackResult {
  const error = ref<string>("");
  const toast = useToast()
  const loading = ref(false);
  const completed = ref(false);

  const state = reactive<TechStackValue>({...defaultState});

  async function execute() {
    loading.value = true;

    const result = await fromPromise(
      fetchTechStack().then((res) => res.data.techStack),

      (e) => e as Error,
    );

    if(result.isErr()){
      error.value='Failed to fetch Profiles details'
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
