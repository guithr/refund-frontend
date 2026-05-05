import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../helpers/api";
import type { RefundIndex } from "../../../types/api";
import { useQueryState, createSerializer, parseAsString } from "nuqs";

const toSearchParams = createSerializer({
  q: parseAsString,
  page: parseAsString,
});

export function useRefunds() {
  const [q, setQ] = useQueryState("q");
  const [page, setPage] = useQueryState("page");

  const { data, isLoading } = useQuery<RefundIndex>({
    queryKey: ["refunds", { q, page }],
    queryFn: () => fetcher(`/refunds${toSearchParams({ q, page })}`),
  });

  return {
    refunds: data?.refunds.data || [],
    isLoadingRefunds: isLoading,
    filters: {
      q,
      setQ,
      page,
      setPage,
    },
  };
}
