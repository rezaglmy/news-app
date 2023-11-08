import { useGlobalStore } from "@/store";
import useSwr from "swr";
import { GetArticlesResult, UseArticlesResult } from "../types";
import { useMemo } from "react";
import { useDebounce } from "@/hooks";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useArticles = (): UseArticlesResult => {
  const { pageNumber, setPageNumber, category, searchTerm, setSearchTerm } =
    useGlobalStore();
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);

  const onSearch = (value: string) => setSearchTerm(value);

  const search = useMemo(
    () => (debouncedSearchTerm?.length ? debouncedSearchTerm : undefined),
    [debouncedSearchTerm]
  );

  const { data, error, isLoading } = useSwr<GetArticlesResult>(
    `/api/news-api-articles/${pageNumber}?category=${category}&search=${search}`,
    fetcher
  );

  const gotoPage = (page: number) => {
    setPageNumber(page);
  };

  return {
    articlesData: data,
    error,
    isLoading,
    pageNumber,
    total: data?.totalResults ?? 0,
    gotoPage,
    onSearch,
  };
};
