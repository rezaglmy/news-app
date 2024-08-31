import { useAppDispatch, useAppSelector } from '@/hooks';
import { setArticles } from '@/store';
import { Article, FilterSourceEnum } from '@/types';
import dayjs from 'dayjs';
import { useEffect, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import useGuardianArticles from './useGuardianArticles';
import useNewsApiArticles from './useNewsApiArticles';

export default function useArticles() {
  const dispatch = useAppDispatch();
  const { searchText, articles, filter } = useAppSelector((state) => state.article);
  const [customizedSources] = useLocalStorage<string[]>('customized-sources', []);
  const [customizedCategories] = useLocalStorage<string[]>('customized-categories', []);

  const { articles: guardianArticlesData, isLoading: guardianDataIsLoading } = useGuardianArticles();
  const { articles: newsApiArticlesData, isLoading: newsApiDataIsLoading } = useNewsApiArticles();

  const guardianArticles = useMemo(
    () =>
      !filter?.source || (filter?.source && filter.source === FilterSourceEnum.GUARDIAN)
        ? guardianArticlesData?.map((item) => {
            return {
              title: item.webTitle,
              author: item.fields?.byline,
              description: item.fields?.trailText,
              url: item.webUrl,
              imageUrl: item.fields?.thumbnail,
              publishedAt: item.webPublicationDate ? dayjs(item.webPublicationDate).format('ll') : '',
            } as Article;
          })
        : [],
    [guardianArticlesData, filter?.source],
  );

  const newsApiArticles = useMemo(
    () =>
      !filter?.source || (filter?.source && filter.source === FilterSourceEnum.NEWS_API)
        ? newsApiArticlesData?.map((item) => {
            const { title, author, description, url, urlToImage, publishedAt } = item;
            return {
              title,
              author,
              description,
              url,
              imageUrl: urlToImage,
              publishedAt: publishedAt ? dayjs(publishedAt).format('ll') : '',
            } as Article;
          })
        : [],
    [newsApiArticlesData, filter?.source],
  );

  useEffect(() => {
    dispatch(setArticles({ articles: [...guardianArticles, ...newsApiArticles] }));
  }, [
    newsApiArticles?.length,
    guardianArticles?.length,
    searchText,
    filter?.category,
    filter?.startDate,
    filter?.endDate,
    customizedCategories?.length,
    customizedSources,
  ]);

  return {
    articles,
    isLoading: newsApiDataIsLoading || guardianDataIsLoading,
  };
}
