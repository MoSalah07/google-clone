import React from "react";
import parse from "html-react-parser";
import Link from "next/link";

function ItemSearch({
  result: {
    link,
    htmlSnippet,
    displayLink,
    title,
    htmlFormattedUrl,
    kind,
    snippe,
  },
  result,
}) {
  //   console.log(htmlFormattedUrl);
  return (
    <>
      <div className="max-w-xl mb-8 ">
        <div className="group">
          <Link href={`${link}`} legacyBehavior>
            <a className=" text-sm truncate">{parse(htmlFormattedUrl)}</a>
          </Link>
          <Link href={`${link}`} legacyBehavior>
            <a className=" group-hover:underline">
              <h2 className=" truncate text-lg font-medium text-blue-800 decoration-blue-800">{title}</h2>
            </a>
          </Link>
        </div>
        <p className=" text-gray-600">{parse(htmlSnippet)}</p>
      </div>
    </>
  );
}

export default ItemSearch;
