"use client";

import { useState } from "react";
import { faqData } from "./faq-data";
import { FAQItem } from "./faq-item";

export const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className="bg-white" id="faqs">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 lg:mb-8 lg:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mx-auto max-w-screen-md">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white text-gray-900 "
            data-inactive-classes="text-gray-500 "
          >
            {faqData.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openItem === item.id}
                setOpenItem={setOpenItem}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
