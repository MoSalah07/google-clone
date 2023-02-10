import Image from "next/image";
import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/router";

function GoogleForm() {
  const searchInput = useRef(null);
  const router = useRouter();

  const handelSearch = async (e) => {
    e.preventDefault();
    const term = searchInput.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  return (
    <form
      onSubmit={handelSearch}
      className=" flex flex-col items-center justify-center"
    >
      <Image
        src={"/google.webp"}
        width={300}
        height={300}
        alt="google"
        priority
        className=" object-cover"
      />
      <div className=" relative w-[80%] md:w-[40%] ">
        <AiOutlineSearch className=" absolute top-[50%] left-2 translate-y-[-50%] text-lg text-gray-500" />
        <input
          ref={searchInput}
          className=" hover:shadow-lg focus-within:shadow-lg border-2 w-full rounded-xl py-[.4rem] px-8 focus:outline-none transition-shadow"
          type="text"
        />
        <BsFillMicFill className=" absolute right-2 top-[50%] translate-y-[-50%] text-lg text-gray-500" />
      </div>
      <div className=" flex items-center justify-center gap-4 mt-6">
        <button className=" bg-[#f8f9fa] capitalize font-normal border-[1px] border-gray-300 block px-4 py-1 rounded-md text-gray-800 hover:ring-1 hover:ring-gray-200 transition-all focus:outline-none active:ring-gray-300 hover:shadow-md">
          google search
        </button>
        <button className=" bg-[#f8f9fa] capitalize font-normal border-[1px] border-gray-300 block px-4 py-1 rounded-md text-gray-800 hover:ring-1 hover:ring-gray-200 transition-all focus:outline-none active:ring-gray-300 hover:shadow-md">
          i&apos;m feeling lucky
        </button>
      </div>
    </form>
  );
}

export default GoogleForm;
