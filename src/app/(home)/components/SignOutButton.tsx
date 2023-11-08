"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return (
    <>
      <button
        onClick={() => signOut()}
        className="bg-orange-600 px-8 text-white rounded-xl"
      >
        Sair
      </button>
    </>
  );
};

export default SignOutButton;
