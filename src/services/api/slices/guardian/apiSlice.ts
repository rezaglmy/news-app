import type { GetGuardianArticlesRootResult } from './types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configs from '@/config';
import { FilterCategoryEnum, FilterSourceEnum, GetNewsApiQuery } from '@/types';

export const guardianApiSlice = createApi({
  reducerPath: 'guardian-api',
  baseQuery: fetchBaseQuery({
    baseUrl: configs.guardian.baseUrl,
    timeout: 60000,
  }),
  tagTypes: ['GuardianArticle'],
  endpoints: (builder) => ({
    getGuardianArticles: builder.query<GetGuardianArticlesRootResult, GetNewsApiQuery>({
      query: ({ searchText, category, startDate, endDate, customizedCategories, customizedSources }) => {
        const search = searchText ? `"${searchText}"` : '';
        const q = search || undefined;

        let cats = customizedCategories ?? [];
        const cat = category !== FilterCategoryEnum.ALL ? category : undefined;
        if (cat) {
          cats = [...cats, cat];
        }

        const categories = cats?.length ? cats.join(' OR ') : undefined;

        return {
          url: `/search`,
          method: 'GET',
          params: {
            'api-key': configs.guardian.apiKey,
            'page-size':
              !customizedSources ||
              customizedSources?.length === 0 ||
              (customizedSources.length &&
                customizedSources.some((item) => (item as FilterSourceEnum) === FilterSourceEnum.GUARDIAN))
                ? 10
                : 0,
            'show-fields': 'thumbnail,byline,trailText,publication',
            q,
            section: categories,
            'from-date': startDate ? startDate.format('YYYY-MM-DD') : undefined,
            'to-date': endDate ? endDate.format('YYYY-MM-DD') : undefined,
            'query-fields': 'headline',
          },
        };
      },
      providesTags: (result) => {
        return result?.response?.results?.length
          ? [
              ...result.response.results.map(({ id }) => ({
                type: 'GuardianArticle' as const,
                id,
              })),
              'GuardianArticle',
            ]
          : ['GuardianArticle'];
      },
    }),
  }),
});

export const { useGetGuardianArticlesQuery } = guardianApiSlice;
