export type Article = {
  title: string;
  link: string;
  keywords: string[];
  description: string;
  content: string;
  publishDate: string;
  imageUrl?: string;
  source: string;
  category: string[];
};

export type GetArticlesResult = {
  totalResults: number;
  results: Article[];
};

export type GetArticlesProps = {
  search?: string;
  category: string;
  page: number;
};

export type NewsApiArticle = {
  url: string;
  title: string;
  description: string;
  content: string;
  urlToImage: string;
};

export type GuardianApiArticle = {
  webUrl: string;
  webTitle: string;
  webPublicationDate: string;
  pillarName: string;
  sectionName: string;
};

export type GetNewsApiArticlesResult = {
  totalResults: number;
  articles: NewsApiArticle[];
};

export type GetGuardianApiArticlesResult = {
  total: number;
  pages: number;
  results: GuardianApiArticle[];
};

export type UseArticlesResult = {
  articlesData?: GetArticlesResult;
  error: any;
  isLoading: boolean;
  pageNumber: number;
  total: number;
  gotoPage: (page: number) => void;
  onSearch: (value: string) => void;
};

export type UseHeaderResult = {
  handleSelectCategory: (value: string) => void;
};

export type Filter = { page: number; search?: string };
