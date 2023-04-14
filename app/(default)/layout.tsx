"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-[#6672a8] to-[#d696b3]">
        {children}
      </div>
    </>
  );
}
