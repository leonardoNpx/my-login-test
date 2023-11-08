"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return (
    <>
      <button
        onClick={() => signOut()}
        className="bg-orange-600 px-8 py-1 text-white rounded-xl dark:bg-orange-600"
      >
        Sair
      </button>
    </>
  );
};

export default SignOutButton;
