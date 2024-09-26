import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import SignIn from "./auth/signin/page";

export const metadata: Metadata = {
  title: "The Beats Beyond Dashboard",
  description: "This is The Beats Beyond Dashboard",
};

export default function Home() {
  return (
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
  );
}
