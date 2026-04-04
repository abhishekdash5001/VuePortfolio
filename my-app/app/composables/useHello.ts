import { fetchHello } from "~/datasource/helloDataSource";

export function useHello() {
  const { result, loading, error } = fetchHello();

  const message = computed(() => {
    return result.value?.profile ?? "";
  });

  return {
    message,
    loading,
    error,
  };
}
