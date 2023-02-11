import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Icons
import { BiChevronsRight, BiChevronsLeft } from "react-icons/bi";

function PaginationButtons() {
  const router = useRouter();
  // For Pagination In Client Side
  // Convert Query To Number Beacuse I Add 1 + 10  For Start From 11
  // Search Work Auto From Google
  const startIndex = Number(router.query.start) || 1;
  const {
    query: { term, searchType },
  } = useRouter();

  return (
    <div className="flex items-center gap-16 sm:gap-52 mb-6">
      {startIndex > 10 && (
        <Link
          legacyBehavior
          href={`/search?term=${term}&searchType=${searchType}&start=${
            startIndex - 10
          }`}
        >
          <a className=" cursor-pointer hover:underline decoration-blue-700 text-blue-700 flex flex-col items-center justify-center">
            <BiChevronsLeft className="h-6 w-6" />
            <p>Previous</p>
          </a>
        </Link>
      )}

      {startIndex < 90 && (
        <Link
          legacyBehavior
          href={`/search?term=${term}&searchType=${searchType}&start=${
            startIndex + 10
          }`}
        >
          <a className=" cursor-pointer hover:underline decoration-blue-700 text-blue-700 flex flex-col items-center justify-center">
            <BiChevronsRight className="h-6 w-6" />
            <p>Next</p>
          </a>
        </Link>
      )}
    </div>
  );
}

export default PaginationButtons;
