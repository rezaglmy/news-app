import { useAppSelector } from '@/hooks';
import { useGetGuardianArticlesQuery } from '@/services/api';
import { FilterSourceEnum } from '@/types';
import { Dayjs } from 'dayjs';
import { useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export default function useGuardianArticles() {
  const { searchText, filter } = useAppSelector((state) => state.article);
  const [customizedSources] = useLocalStorage<string[]>('customized-sources', []);
  const [customizedCategories] = useLocalStorage<string[]>('customized-categories', []);

  const { articles, isLoading } = useGetGuardianArticlesQuery(
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
        articles: data?.response?.results ?? [],
      }),
    },
  );

  const filteredArticles = useMemo(
    () => (!filter?.source || (filter?.source && filter.source === FilterSourceEnum.GUARDIAN) ? articles : []),
    [articles, filter?.source],
  );

  return {
    articles: filteredArticles,
    isLoading,
  };
}
