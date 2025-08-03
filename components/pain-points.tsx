import Image from "next/image";

export const PainPoints = () => {
  return (
    <section className="bg-white" id="pain-points">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 lg:grid lg:grid-cols-2 lg:px-6 xl:gap-16">
        <Image
          height={500}
          width={500}
          className="mb-4 w-full rounded-lg lg:mb-0"
          src="/laptop-image.jpg"
          alt="Laptop image"
        />
        <div className="text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
            Work Smarter — Not Harder
          </h2>
          <p className="mb-8 font-light lg:text-xl">
            Managing time, projects, and productivity shouldn&apos;t feel like a
            second job. Whether you&apos;re a solo freelancer or a growing team,
            our app helps you reclaim your hours and focus on what matters.
          </p>
          <div className="mb-6 border-t border-b border-gray-200 py-8">
            <div className="flex">
              <div className="bg-primary-100 mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                <svg
                  className="text-primary-600 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Forgotten Hours
                </h3>
                <p className="mb-2 font-light text-gray-500">
                  No more guessing how much time you spent on that client task.
                  Track time effortlessly and ensure every minute is accounted
                  for.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100">
                <svg
                  className="h-5 w-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Inconsistent Logging
                </h3>
                <p className="mb-2 font-light text-gray-500">
                  Jumping between tools or relying on memory? Keep all your work
                  logs in one simple, centralized app — made just for
                  freelancers.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100">
                <svg
                  className="h-5 w-5 text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Overwhelming Complexity
                </h3>
                <p className="mb-2 font-light text-gray-500">
                  Tired of clunky, bloated tools? Timorya is designed for
                  simplicity, so you can focus on what matters — your work.
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm">
            Track your time with ease, log tasks directly from your calendar,
            and stay organized without the clutter. Whether you’re working on
            multiple clients or just want a clear view of your day, our tool
            helps you stay accountable and focused — no spreadsheets, no
            guesswork.
          </p>
        </div>
      </div>
    </section>
  );
};
