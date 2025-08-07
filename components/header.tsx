"use client";

import Link from "next/link";
import { TimoryaLogo } from "../icons/timorya-logo";
import { useState } from "react";
import classNames from "classnames";

export const Header = () => {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <nav className="relative border-b border-gray-200 bg-white px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link href="/" className="flex flex-3/12 items-center">
            <TimoryaLogo />
          </Link>
          <div className="flex flex-3/12 items-center justify-end lg:order-2">
            <Link
              href={`${url}/login`}
              className="mr-2 hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none sm:block lg:px-5 lg:py-2.5"
            >
              Log in
            </Link>
            <Link
              href={`${url}/register`}
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white focus:ring-4 focus:outline-none lg:px-5 lg:py-2.5"
            >
              <span className="hidden lg:inline">Try it. It&apos;s free.</span>

              <span className="inline lg:hidden">Register</span>
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span className="sr-only">Open main menu</span>
              {!openMenu ? (
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div
            id="mobile-menu-2"
            className={classNames(
              "top-[56px] w-full flex-6/12 items-center justify-center overflow-hidden bg-white lg:static lg:top-auto lg:z-auto lg:flex lg:h-auto lg:w-auto lg:overflow-auto",
              {
                [openMenu
                  ? "absolute left-0 z-50 w-screen border border-gray-100 pb-2"
                  : "hidden lg:flex lg:w-auto lg:space-x-8"]: true,
              },
            )}
          >
            <ul className="mt-2 flex flex-col font-medium whitespace-nowrap lg:mt-0 lg:flex-row lg:space-x-8">
              <li className="flex w-full items-center justify-center">
                <Link
                  href="/#hero"
                  className={classNames(
                    "lg:hover:text-primary-700 block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent",
                    { "w-full text-center": openMenu },
                  )}
                >
                  Home
                </Link>
              </li>
              <li className="flex w-full items-center justify-center">
                <Link
                  href="/#pain-points"
                  className={classNames(
                    "lg:hover:text-primary-700 block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent",
                    { "w-full text-center": openMenu },
                  )}
                >
                  Why Timorya
                </Link>
              </li>
              <li className="flex w-full items-center justify-center">
                <Link
                  href="/#features"
                  className={classNames(
                    "lg:hover:text-primary-700 block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent",
                    { "w-full text-center": openMenu },
                  )}
                >
                  Features
                </Link>
              </li>
              <li className="flex w-full items-center justify-center">
                <Link
                  href="/#contact"
                  className={classNames(
                    "lg:hover:text-primary-700 block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent",
                    { "w-full text-center": openMenu },
                  )}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
