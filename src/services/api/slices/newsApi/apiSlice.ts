import type { GetNewsApiArticlesResult } from './types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configs from '@/config';
import { FilterCategoryEnum, FilterSourceEnum, GetNewsApiQuery } from '@/types';

export const newsApiApiSlice = createApi({
  reducerPath: 'news-api',
  baseQuery: fetchBaseQuery({
    baseUrl: configs.newsApi.baseUrl,
    timeout: 60000,
    headers: {
      Authorization: `Bearer ${configs.newsApi.apiKey}`,
    },
  }),
  tagTypes: ['NewsApiArticle'],
  endpoints: (builder) => ({
    getNewsApiArticles: builder.query<GetNewsApiArticlesResult, GetNewsApiQuery>({
      query: ({ searchText, category, startDate, endDate, customizedCategories, customizedSources }) => {
        let cats = customizedCategories ?? [];
        const cat = category !== FilterCategoryEnum.ALL ? category : undefined;
        if (cat) {
          cats = [...cats, cat];
        }

        const categories = cats?.length ? cats.map((item) => `"${item}"`).join(' OR ') : undefined;

        const search = searchText ? `"${searchText}"` : '';
        const q = (categories ? `(${categories})${search ? ` AND ${search}` : ''}` : search) || null;

        return {
          url: `/v2/everything`,
          method: 'GET',
          params: {
            language: 'en',
            pageSize:
              !customizedSources ||
              customizedSources?.length === 0 ||
              (customizedSources.length &&
                customizedSources.some((item) => (item as FilterSourceEnum) === FilterSourceEnum.NEWS_API))
                ? 10
                : 0,
            q,
            from: startDate ? startDate.format('YYYY-MM-DD') : null,
            to: endDate ? endDate.format('YYYY-MM-DD') : null,
          },
        };
      },
      providesTags: (result) => {
        return result?.articles?.length
          ? [
              ...result.articles.map(({ title }) => ({
                type: 'NewsApiArticle' as const,
                title,
              })),
              'NewsApiArticle',
            ]
          : ['NewsApiArticle'];
      },
    }),
  }),
});

export const { useGetNewsApiArticlesQuery } = newsApiApiSlice;
