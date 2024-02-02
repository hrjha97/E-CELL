import { SerpAPILoader } from "langchain/document_loaders/web/serpapi";

export const searchToDocs = async (question: string) => {
  const apiKey = process.env.SERP_API_KEY;

  if (!apiKey) {
    return `Error: SERP API Key is not provided.`;
  }
  // Use SerpAPILoader to load web search results
  const loader = new SerpAPILoader({ q: question, apiKey });
  const docs = await loader.load();

  if (!Array.isArray(docs) || docs.length === 0) {
    console.error("Invalid or empty array returned by loader");
  }
  return docs;
};
