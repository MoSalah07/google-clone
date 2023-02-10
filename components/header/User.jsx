import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

function User({ styleSearch = false }) {
  // Status
  const [isShowMenu, setIsShowMenu] = useState(false);

  // Auth From Next Auth
  const { data: session } = useSession();

  // console.log(session);
  if (session) {
    return (
      <>
        <Image
          src={session.user.image}
          alt={session.user.name}
          height={styleSearch ? 50 : 35}
          width={styleSearch ? 50 : 35}
          priority
          style={{ objectFit: "cover", borderRadius: "50%" }}
          className="hover:bg-gray-200 cursor-pointer p-1 transition-all"
          onClick={() => setIsShowMenu((prev) => !prev)}
        />
        {isShowMenu && (
          <div
            className={` absolute bg-red-50 ${
              styleSearch ? "bottom-[-1.5rem]" : " right-0 top-[3rem] "
            } w-24 h-16 flex flex-col items-center`}
          >
            <button
              onClick={() => {
                setIsShowMenu(false);
                signOut();
              }}
              className=" capitalize block mt-2"
            >
              logout
            </button>
          </div>
        )}
      </>
    );
  }
  // Not Login No Auth
  return (
    <button
      onClick={signIn}
      className={`bg-blue-500 text-white ${
        styleSearch ? "px-6 py-[.5rem]" : "px-2 py-1"
      } rounded-md text-base
       hover:brightness-105 hover:shadow-sm transition-all capitalize`}
    >
      sign in
    </button>
  );
}

export default User;
