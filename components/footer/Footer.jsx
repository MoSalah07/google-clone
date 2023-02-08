import React from "react";

function Footer() {
  const dynamicYear = new Date().getFullYear();
  return (
    <footer className="h-[10.5vh] capitalize flex items-center justify-center">
      <p className=" text-gray-600">copyright &copy; {dynamicYear} mohamed salah</p>
    </footer>
  );
}

export default Footer;
