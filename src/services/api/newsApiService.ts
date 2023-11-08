import {
  Article,
  GetArticlesProps,
  GetArticlesResult,
  pageSize,
  GetNewsApiArticlesResult,
} from "@/features/articles";

export const getNewsApiArticles = async (
  params: GetArticlesProps
): Promise<GetArticlesResult> => {
  const { search, category, page } = params;

  const apiPath =
    search !== ""
      ? `everything?q=${search}`
      : `top-headlines?language=en&pageSize=${pageSize}&page=${page}` +
        (category !== "all" ? `&category=${category}` : "");

  const response = await fetch(`https://newsapi.org/v2/${apiPath}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEWS_API_KEY}`,
    },
  });

  const { totalResults, articles } =
    (await response.json()) as GetNewsApiArticlesResult;

  const results = articles?.length
    ? articles.map(
        (article) =>
          ({
            link: article.url,
            imageUrl: article.urlToImage,
            title: article.title,
            description: article.description,
            content: article.content,
          } as Article)
      )
    : [];

  return {
    totalResults,
    results,
  };
};
