import { useAppSelector } from '@/hooks';
import { useGetNewsApiArticlesQuery } from '@/services/api';
import { FilterSourceEnum } from '@/types';
import { Dayjs } from 'dayjs';
import { useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export default function useNewsApiArticles() {
  const { searchText, filter } = useAppSelector((state) => state.article);
  const [customizedSources] = useLocalStorage<string[]>('customized-sources', []);
  const [customizedCategories] = useLocalStorage<string[]>('customized-categories', []);

  const { articles, isLoading } = useGetNewsApiArticlesQuery(
    {
      searchText,
      category: filter?.category,
      startDate: filter?.startDate as Dayjs | null,
      endDate: filter?.endDate as Dayjs | null,
      customizedCategories,
      customizedSources,
    },
    {
      selectFromResult: ({ data, isLoading }) => ({
        isLoading,
        articles: data?.articles ?? [],
      }),
    },
  );

  const filteredArticles = useMemo(
    () => (!filter?.source || (filter?.source && filter.source === FilterSourceEnum.NEWS_API) ? articles : []),
    [articles, filter?.source],
  );

  return {
    articles: filteredArticles,
    isLoading,
  };
}
