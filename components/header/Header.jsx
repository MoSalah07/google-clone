import React from "react";
import Link from "next/link";
import Container from "../layout/Container";
import User from "./User";
import { useRouter } from "next/router";

function Header() {
  
  const router = useRouter();

  return (
    <Container>
      <header className="h-[10vh] capitalize relative">
        <nav className="flex items-center justify-between">
          <ul className="flex items-center gap-4 basis-2/5">
            <li>
              <Link legacyBehavior href={`https://about.google/`}>
                <a className="link text-gray-700 font-medium">about</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={`https://store.google.com/`}>
                <a className="link text-gray-700 font-medium">store</a>
              </Link>
            </li>
          </ul>
          <ul className="flex items-center basis-2/5 justify-end gap-4 relative">
            <li>
              <Link legacyBehavior href={`https://mail.google.com`}>
                <a className="link text-gray-700 font-medium">gmail</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={`/search?term=${router.query.term || 'google'}&searchType=image`}>
                <a className="link text-gray-700 font-medium">images</a>
              </Link>
            </li>
            <li>
              {/* <Link legacyBehavior href={`/`}>
                <a>user</a>
              </Link> */}
                          <User />
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
}

export default Header;
