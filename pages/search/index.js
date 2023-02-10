import Head from "next/head";
import React from "react";
import HeaderSearch from "../../components/header/HeaderSearch";
import axios from "axios";
import Response from "../../Response";
import { useRouter } from "next/router";
import SearchResult from '../../components/search/SearchResult'

function Search({ results, results:{searchInformation} }) {

  const router = useRouter();
  return (
    <>
      <Head>
        <title> {router.query.term} - Search Page</title>
      </Head>
      <main className="min-h-[100vh]">
        <HeaderSearch />
        <SearchResult searchInformation={searchInformation} />
      </main>
    </>
  );
}

export default Search;

export async function getServerSideProps(context) {
  //  Here Avoid Request Any Enter Because Google Gave You 100 Request In Day
  const mockData = true;

  const data = mockData
    ? Response
    : await axios
        .get(
          `https://www.googleapis.com/customsearch/v1?key=${
            process.env.API_KEY
          }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
            context.query.searchType && "&searchType=image"
          }`
        )
        .then((res) => res.data);

  return {
    props: { results: data },
  };
}
