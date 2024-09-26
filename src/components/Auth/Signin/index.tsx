"use client";
import React from "react";
import SigninWithPassword from "../SigninWithPassword";

export default function Signin() {
  return (
    <div className="flex-column my-6 items-center justify-center">
      <h4>Sign in</h4>
      <div>
        <SigninWithPassword />
      </div>
    </div>
  );
}
