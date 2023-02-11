import React from "react";
import Container from "../layout/Container";
import ItemSearch from "./ItemSearch";

function SearchResult({ results }) {
  return (
    <div className="   w-full mx-auto px-3 sm:pl-[5%] md:pl-32  lg:pl-52 ">
      <p className="capitalize text-gray-600 text-sm font-normal my-4">
        aboout {results && results.searchInformation.formattedTotalResults}{" "}
        results ({results && results.searchInformation.formattedSearchTime}{" "}
        seconds)
      </p>
      {results &&
        results.items.map((result) => (
          <ItemSearch key={result.link} result={result} />
        ))}
    </div>
  );
}

export default SearchResult;
