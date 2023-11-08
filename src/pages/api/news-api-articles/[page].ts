import { pageSize } from "@/features/articles";
import { getNewsApiArticles } from "@/services";
import { NextApiRequest, NextApiResponse } from "next";

export default async function newsApiArticlesHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== "GET") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  try {
    const pageNumber = request?.query?.page ? Number(request?.query?.page) : 1;
    const category = request?.query?.category as string;
    const search = request?.query?.search as string;

    if (!pageNumber || pageNumber < 1 || pageNumber > pageSize) {
      return [];
    }

    const newsApiResponse = await getNewsApiArticles({ category, page: pageNumber, search });

    response.json(newsApiResponse);
  } catch (error) {}
}
