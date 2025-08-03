"use client";

import { FormProvider, useForm } from "react-hook-form";
import Input from "./ui/input";
import Textarea from "./ui/textarea";
import { useToastStore } from "@/store/toast-store";
import classNames from "classnames";
import { useState } from "react";

export type ContactFormType = {
  email: string;
  subject: string;
  message: string;
};

export const ContactForm = () => {
  const { showToast } = useToastStore();
  const [isSending, setIsSending] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_WEBSITE_API;

  const methods = useForm<ContactFormType>({
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit = async (data: ContactFormType) => {
    console.log("Form submitted:", data);
    try {
      setIsSending(true);
      const response = await fetch(`${apiUrl}/api/public/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        showToast("Failed to submit form. Please try again.", "error");
      } else {
        showToast("Form submitted successfully!", "success");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setIsSending(false);
    reset();
  };

  return (
    <section className="bg-white" id="contact">
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <Input
              label="Email"
              error={errors.email?.message}
              placeholder="Enter email"
              {...methods.register("email")}
            />

            <Input
              label="Subject"
              error={errors.subject?.message}
              placeholder="Enter subject"
              {...methods.register("subject")}
            />

            <Textarea
              label="Message"
              error={errors.message?.message}
              placeholder="Enter message"
              {...methods.register("message")}
            />

            <button
              type="submit"
              className={classNames(
                "bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 cursor-pointer rounded-lg px-5 py-3 text-center text-sm font-medium text-white focus:ring-4 focus:outline-none sm:w-fit",
                {
                  "cursor-not-allowed opacity-50": isSending,
                },
              )}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};
