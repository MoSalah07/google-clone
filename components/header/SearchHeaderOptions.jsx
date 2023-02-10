import React from "react";
import SearchHeaderOption from "./SearchHeaderOption";
import { IoImages } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";

function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex items-center gap-8  h-12 select-none mt-1 sm:mt-4 ">
      <div className=" basis-[25%] lg:basis-[10%]"></div>
      <div className="flex items-center gap-6 flex-1">
        <SearchHeaderOption
          type={"all"}
          Icon={AiOutlineSearch}
          selected={router.query.searchType === "" || !router.query.searchType}
        />
        <SearchHeaderOption
          type={"image"}
          Icon={IoImages}
          selected={router.query.searchType === "image"}
        />
      </div>
    </div>
  );
}

export default SearchHeaderOptions;
