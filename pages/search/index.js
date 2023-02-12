import Head from "next/head";

// Components
import HeaderSearch from "../../components/header/HeaderSearch";
import SearchResult from "../../components/search/SearchResult";
import ImageResult from "../../components/search/ImageResult";

// Libs
import { useRouter } from "next/router";
// Response Internal Avoid Bad Request Because Google Gave 100 Request Only
import Response from "../../Response";
import ResponseImg from "../../ResponseImg";
import axios from "axios";


function Search({ results }) {




  const router = useRouter();
  return (
    <>
      <Head>
        <title> {router.query.term} - Search Page</title>
      </Head>
      <main className="min-h-[100vh]">
        <HeaderSearch />
        {router.query.searchType === "image" ? (
          <ImageResult results={results} />
        ) : (
          <SearchResult results={results} />
        )}
      </main>
    </>
  );
}

export default Search;

export async function getServerSideProps(context) {
  // For Pagination In ServerSide
  // Search Work Auto From Google
  const startIndex = context.query.start || "1";

  //  Here Avoid Request Any Enter Because Google Gave You 100 Request In Day
  const mockData = false;

  //  Here For Change Between Search All And Search Image From DummyData
  const dummyResponse =
    context.query.searchType === "image" ? ResponseImg : Response;

  const data = mockData
    ? dummyResponse
    : await axios
        .get(
          `https://www.googleapis.com/customsearch/v1?key=${
            process.env.API_KEY
          }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
            context.query.searchType && "&searchType=image"
          }&start=${startIndex}`
        )
        .then((response) => response.data);

  return {
    props: { results: data },
  };
}
