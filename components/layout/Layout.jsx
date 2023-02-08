import React from "react";
import Head from "next/head";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout({ title = "Google-V3", children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="min-h-[75vh]">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
