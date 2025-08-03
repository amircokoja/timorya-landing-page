import { FAQItemType } from "./faq-data";

interface Props {
  item: FAQItemType;
  isOpen: boolean;
  setOpenItem?: (id: string | null) => void;
}

export const FAQItem = ({ item, isOpen, setOpenItem }: Props) => {
  return (
    <>
      <h2 id={`accordion-flush-heading-${item.id}`}>
        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-between border-b border-gray-200 bg-white py-5 text-left font-medium text-gray-900 hover:bg-gray-50"
          data-accordion-target={`#accordion-flush-body-${item.id}`}
          aria-expanded="true"
          onClick={() => setOpenItem?.(isOpen ? null : item.id)}
        >
          <span>{item.question}</span>
          {isOpen ? (
            <svg
              data-accordion-icon=""
              className="h-6 w-6 shrink-0 rotate-180"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              data-accordion-icon=""
              className="h-6 w-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </h2>
      <div
        id={`accordion-flush-body-${item.id}`}
        className={isOpen ? "" : "hidden"}
        aria-labelledby={`accordion-flush-heading-${item.id}`}
      >
        <div className="border-b border-gray-200 py-5">
          <p className="mb-2 text-gray-500">{item.answer}</p>
        </div>
      </div>
    </>
  );
};
