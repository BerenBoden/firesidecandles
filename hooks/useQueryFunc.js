import { useQuery } from "@tanstack/react-query";

export const useData = (queryKey, queryFn) => {
  const { data, isLoading, isError } = useQuery({queryKey, queryFn});
  return { data, isLoading, isError };
};