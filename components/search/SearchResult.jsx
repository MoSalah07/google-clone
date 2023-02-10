import React from "react";
import Container from "../layout/Container";

function SearchResult({
  searchInformation: {
    formattedSearchTime,
    formattedTotalResults,
    searchTime,
    totalResults,
  },
}) {
  return (
    <div className=" w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-32 my-4">
          <p className="md:pl-32 capitalize text-gray-600 text-sm font-normal">aboout {formattedTotalResults} results ({ formattedSearchTime} seconds)</p>
    </div>
  );
}

export default SearchResult;
