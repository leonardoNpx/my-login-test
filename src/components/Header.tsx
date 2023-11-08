"use client";
import React, { useEffect, useState } from "react";
import ThemeButton from "./button/ThemeButton";
import UserMenu from "@/components/UserMenu";
import Image from "next/image";
import Logo from "../../public/logo2.png";
import { usePathname } from "next/navigation";
import { BellIcon, Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/auth" ? null : (
        <header className="w-full p-4 dark:bg-slate-600 bg-slate-100 flex justify-between items-center shadow-md">
          <div className="flex items-center gap-2">
            <Bars3Icon
              className="w-7 h-7 cursor-pointer"
              // onClick={() => setActiveMenu(!activeMenu)}
            />
            <Image
              src={Logo}
              alt="Logo Npx"
              width={0}
              height={0}
              sizes="100vw"
              className="w-40 h-10 pr-2"
            />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            className="rounded-lg border border-slate-300 outline-none pl-1 h-8 hidden sm:flex"
          />
          <div className="flex justify-center items-center gap-3">
            <ThemeButton />
            <BellIcon className="h-7 w-7" />
            <UserMenu />
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
