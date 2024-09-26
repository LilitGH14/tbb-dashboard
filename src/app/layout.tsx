"use client";
// import "jsvectormap/dist/css/jsvectormap.css";
// import "flatpickr/dist/flatpickr.min.css";
import "../../public/css/style.scss";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import ReduxProvider from "../redux/provider";
import AppProvider from "../contextApi/AppProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>
          <AppProvider>
            { children}
            </AppProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
