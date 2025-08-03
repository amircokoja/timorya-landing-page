import Link from "next/link";
import Image from "next/image";
export const Hero = () => {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;

  return (
    <section className="flex bg-white" id="hero">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <Link
          href={`${url}/login`}
          className="mt-[150px] mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200"
          role="alert"
        >
          <span className="bg-primary-600 mr-3 rounded-full px-4 py-1.5 text-xs text-white">
            New
          </span>{" "}
          <span className="text-sm font-medium">Calendar View is here!</span>
          <svg
            className="ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <h1 className="mb-4 text-4xl leading-none font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Take control of your hours — the easy way
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48">
          Timorya is your clean, free tool for logging time and tracking work.
          Built for those who want results without the clutter.
        </p>
        <div className="mb-[150px] flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href={`${url}/register`}
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
          >
            Try it. It&apos;s free
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            href={`${url}/login`}
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Sign in
          </Link>
        </div>
        <div className="hidden overflow-hidden rounded-2xl border border-gray-200 md:block">
          <Image
            src="/screenshot-xl.png"
            alt="Timorya Hero Image"
            width={1800}
            height={800}
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
};
