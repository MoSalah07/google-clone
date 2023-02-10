import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Container from "../layout/Container";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { useRouter } from "next/router";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";

function HeaderSearch() {
  const router = useRouter();
  //   const [searchValue, setSearchValue] = useState("");
  const searchValue = useRef(null);

  // Functions
  const handelSerachPage = (e) => {
    e.preventDefault();
    const term = searchValue.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  return (
    <header className="min-h-[15vh] w-full flex flex-col justify-center items-center shadow-md sticky">
      <Container>
        <div className="flex items-center justify-between h-full w-full">
          <div
            className="bg-black basis-[25%] lg:basis-[10%] cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src={`/google.webp`}
              alt={`Google Search`}
              width={120}
              height={120}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <form
            onSubmit={handelSerachPage}
            className=" basis-[50%] md:basis-[55%] lg:basis-[65%] relative ml-8 flex items-center"
          >
            <input
              type="text"
              className={`w-full border rounded-full py-2 md:py-3 border-gray-200 shadow-lg
              focus:outline-none  hover:shadow-lg transition-shadow text-gray-800
              pl-4 pr-12 md:pr-28 flex-1 text-xl font-medium`}
              ref={searchValue}
              defaultValue={router.query.term}
            />
            <div className="flex items-center absolute right-6">
              <GrFormClose
                onClick={() => (searchValue.current.value = "")}
                className=" text-xl md:text-2xl block md:mr-1 md:border-r-[.13rem] md:border-gray-600 cursor-pointer"
              />
              <BsFillMicFill className="text-blue-500 text-xl md:text-2xl hidden md:block mr-2 " />
              <AiOutlineSearch className="text-blue-500 text-xl md:text-2xl hidden md:block " />
            </div>
          </form>
          <div className=" basis-[15%] md:basis-[20%] lg:basis-[25%] flex items-center justify-end">
            <User styleSearch={true} />
          </div>
        </div>
        <SearchHeaderOptions />
      </Container>
    </header>
  );
}

export default HeaderSearch;
