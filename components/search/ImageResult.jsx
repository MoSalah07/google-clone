import React from "react";
import PaginationButtons from "../pagination/PaginationButtons";
import ItemImage from "./ItemImage";

function ImageResult({ results }) {
  // console.log(results);
  return (
    <div className="mt-4">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items &&
          results?.items?.map((resultImage) => (
            <ItemImage key={resultImage.link} resultImage={resultImage} />
          ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}

export default ImageResult;
