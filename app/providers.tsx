"use client";

import { useToastStore } from "@/store/toast-store";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { message, type, clearToast } = useToastStore();

  useEffect(() => {
    if (message) {
      switch (type) {
        case "success":
          toast.success(message);
          break;
        case "error":
          toast.error(message);
          break;
        case "info":
          toast(message);
          break;
        case "warning":
          toast(message, { icon: "⚠️" });
          break;
      }
      clearToast();
    }
  }, [clearToast, message, type]);

  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
