import React from "react";
import { useRouter } from "next/router";

function SearchHeaderOption({ type, Icon, selected }) {
  const router = useRouter();

  const selectTab = (title) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === "image" ? "image" : ""
      }`
    );
  };

  return (
    <div
      onClick={() => selectTab(type)}
      className={`flex items-center gap-1 cursor-pointer text-gray-700 border-b-4 border-transparent pb-1 sm:pb-3 hover:text-blue-500 transition-all hover:border-blue-500 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="text-lg h-6" />
      <p className=" hidden sm:block capitalize font-medium ">{type}</p>
    </div>
  );
}

export default SearchHeaderOption;
