import { fromPromise } from "neverthrow";

import { fetchFaqs } from "~/datasource/getFAQs";

import { type FaqValue , ERRORS } from "../types";

interface ProfileResult {
  state: FaqValue;
  execute: () => Promise<void>;
  loading: Ref<boolean>;
  error: Ref<string>;
  completed: Ref<boolean>;
}

const defaultState: FaqValue = {
  faqs: [],
};

export function useFAQs(): ProfileResult {
  const error = ref<string>("");
  const toast = useToast();
  const loading = ref(false);
  const completed = ref(false);

  const state = reactive<FaqValue>({ ...defaultState });

  async function execute() {
    loading.value = true;
    const result = await fromPromise(
      fetchFaqs().then((res) => res.data.faq),

      (e) => e as Error,
    );

    if (result.isErr()) {
      error.value = ERRORS.faqs;
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
