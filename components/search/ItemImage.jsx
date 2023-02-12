/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function ItemImage({
  resultImage: {
    displayLink,
    link,
    title,
    image: { contextLink, height, width },
  },
}) {
  const [isShowImg, setIsShowImg] = useState(false);

  useEffect(() => {
    setIsShowImg(true);
  }, []);
  // console.log(isShowImg);
  return (
    <div className="mb-8">
      {isShowImg && (
        <div className="group">
          <Link href={contextLink} legacyBehavior>
            <a>
              <img className="group-hover:shadow-xl w-full h-60 object-contain" src={link} alt={title} />
              <h2 className="group-hover:underline truncate text-xl">{title}</h2>
              <p className=" group-hover:underline text-gray-600">{displayLink}</p>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ItemImage;
