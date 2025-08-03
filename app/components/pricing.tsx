import Link from "next/link";

export const Pricing = () => {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;

  return (
    <section className="bg-white" id="pricing">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="rounded-lg bg-white shadow lg:grid lg:grid-cols-3">
          <div className="col-span-2 p-6 lg:p-8">
            <h2 className="mb-1 text-2xl font-bold text-gray-900">
              🎉 Free for early users
            </h2>
            <p className="text-lg font-light text-gray-500">
              No credit card required. No limits. We’re building this product
              alongside our users — and your feedback helps shape what comes
              next.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-6">
              <ul role="list" className="space-y-4">
                <li className="flex space-x-2.5">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500">
                    Unlimited time tracking
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500">
                    Calendar-based log view
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500">
                    Manual and flexible time edits
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500">
                    Tagging by client or project
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500">
                    Private and secure data
                  </span>
                </li>
              </ul>
              <ul role="list" className="hidden space-y-4 sm:block">
                <li className="flex space-x-2.5">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500">
                    Responsive UI — mobile & desktop
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500">
                    Early access to new features
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight text-gray-500">
                    Priority input into roadmap decisions
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex bg-gray-50 p-6 text-center lg:p-8">
            <div className="w-full self-center">
              <div className="text-5xl font-extrabold text-gray-900">Free</div>
              <div className="text-light mt-1 mb-4 text-gray-500">for now</div>
              <Link
                href={`${url}/register`}
                className="bg-primary-600 hover:bg-primary-700 focus:ring-bue-200 flex justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4"
              >
                Try it now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
