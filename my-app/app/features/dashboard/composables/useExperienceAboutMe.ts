import { fromPromise } from "neverthrow";

import { fetchExperienceAboutMe } from "~/datasource/getExperienceAbout";

import { type ExperienceValue, ERRORS } from "../types";

interface ProfileResult {
  state: ExperienceValue;
  execute: () => Promise<void>;
  loading: Ref<boolean>;
  error: Ref<string>;
  completed: Ref<boolean>;
}

const defaultState: ExperienceValue = {
  experience: [],
};

export function useExperienceAboutMe(): ProfileResult {
  const error = ref<string>("");
  const toast = useToast();
  const loading = ref(false);
  const completed = ref(false);

  const state = reactive<ExperienceValue>({ ...defaultState });

  async function execute() {
    loading.value = true;
    const result = await fromPromise(
      fetchExperienceAboutMe().then((res) => res.data.experience),

      (e) => e as Error,
    );

    if (result.isErr()) {
      error.value = ERRORS.experienceAboutMe;
      toast.add({
        title: "Error",
        description: error.value,
        color: "error",
      });
    }

    if (result.isOk()) {
      Object.assign(state, result.value);
      completed.value = true;
    }

    loading.value = false;
  }

  return {
    state,
    execute,
    loading,
    error,
    completed,
  };
}
