import { ref } from "vue";
import { fromPromise } from "neverthrow";

import { fetchProfile } from "~/datasource/helloDataSource";

export function useHello() {
  const profile = ref(null);
  const error = ref(null);
  const loading = ref(false);

  async function execute() {
    loading.value = true;

    const result = await fromPromise(
      fetchProfile().then((res) => res.data.profile),

      (e) => e as Error,
    );

    if (result.isOk()) {
      profile.value = result.value;
    } else {
      error.value = result.error;
    }

    loading.value = false;
  }

  return {
    execute,
    profile,
    error,
    loading,
  };
}
