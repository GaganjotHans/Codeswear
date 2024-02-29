import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900"
          >
            <Image src="/logo.png" alt="logo" width={200} height={40} />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Tshirts</a>
            <a className="mr-5 hover:text-gray-900">Hoodies</a>
            <a className="mr-5 hover:text-gray-900">Stickers</a>
            <a className="mr-5 hover:text-gray-900">Mugs</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <div className="cart absolute top-7 right-0 mx-5">
            <MdShoppingCart className="text-2xl" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
