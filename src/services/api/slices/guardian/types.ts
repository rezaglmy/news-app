import type { GuardianArticle } from '@/types';

export interface GetGuardianArticlesResult {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: GuardianArticle[];
}

export interface GetGuardianArticlesRootResult {
  response: GetGuardianArticlesResult;
}
