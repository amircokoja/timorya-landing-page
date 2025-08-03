import Link from "next/link";
import { TimoryaLogo } from "../icons/timorya-logo";

export const Footer = () => {
  return (
    <footer className="bg-white p-4 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/#hero"
          className="flex items-center justify-center text-2xl font-semibold text-gray-900"
        >
          <TimoryaLogo />
        </Link>
        <p className="my-6 text-gray-500">
          Simple, flexible time tracking built for freelancers and early
          adopters — free, private, and growing with you.
        </p>
        <ul className="mb-6 flex flex-wrap items-center justify-center text-gray-900">
          <li>
            <Link href="/#hero" className="mr-4 hover:underline md:mr-6">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#pain-points" className="mr-4 hover:underline md:mr-6">
              Why Timorya?
            </Link>
          </li>
          <li>
            <Link href="/#features" className="mr-4 hover:underline md:mr-6">
              Features
            </Link>
          </li>
          <li>
            <Link href="/#pricing" className="mr-4 hover:underline md:mr-6">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="mr-4 hover:underline md:mr-6">
              Contact us
            </Link>
          </li>
          <li>
            <Link href="/#faqs" className="mr-4 hover:underline md:mr-6">
              FAQs
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center">
          © 2025{" "}
          <Link href="/#home" className="hover:underline">
            Timorya
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
