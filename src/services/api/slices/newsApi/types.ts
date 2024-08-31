import type { NewsApiArticle } from '@/types';

export type GetNewsApiArticlesResult = {
  totalResults: number;
  articles: NewsApiArticle[];
};
