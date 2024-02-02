import { OpenAIEmbeddings } from "@langchain/openai";
import { RetrievalQAChain, loadQAStuffChain } from "langchain/chains";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import * as dotenv from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { searchToDocs } from "./serpapi";

dotenv.config();

// Initialize the necessary components
export const QnARetrival = async (question: string) => {
  const llm = new ChatOpenAI({
    temperature: 0,
    cache: true,
    maxTokens: 1000,
  });
  const embeddings = new OpenAIEmbeddings();

  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      `As a career counselor, check if {query} is related to career counseling if yes then,
          your name is Mira and you are a career counsellor who advise everything about  career about your interest of secondary and higher secondary student. Answer in following format:
          1. what will be the skills in future?
          2. what should be courses to be offered according to his skill ?
          3. Suggest some university which offer these courses accordingly to their skills and interests.  you will provide guidance and advice to individuals who are seeking help with their career choices. You will help them explore their interests, skills, and abilities, and provide information about different careers and educational opportunities. You will also assist them in setting career goals and developing a plan to achieve them.
        If the question is unrelated to career counseling, respond with "Hmm, I'm not sure.
        Can you provide more information?". if not then, don't answer any question instead repond with "Hmm, I'm not sure",
        `,
    ],
    ["user", "{query}"],
  ]);

  // Use SerpAPILoader to load web search results
  const docs: any = searchToDocs(question);

  const truncatedText = truncateToWords(docs[0].pageContent, 70);

  const truncatedDoc = { ...docs[0], pageContent: truncatedText };
  const docs1 = [truncatedDoc];

  console.log(docs1);

  // Use MemoryVectorStore to store the loaded documents in memory
  const vectorStore = await MemoryVectorStore.fromDocuments(docs1, embeddings);

  // Use RetrievalQAChain to retrieve documents and answer the question
  const chain = new RetrievalQAChain({
    combineDocumentsChain: loadQAStuffChain(llm, { prompt }),
    retriever: vectorStore.asRetriever(),
  });
  const answer = await chain.invoke({ query: question });

  return answer;
};

function truncateToWords(text: string, maxWords: number) {
  const words = text.split(" ");
  const truncatedWords = words.slice(0, maxWords);
  return truncatedWords.join(" ");
}
