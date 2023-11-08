"use client";
import React, { useState } from "react";
import Image from "next/image";
import Avatar from "../../public/avatar.jpg";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const UserMenu = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="h-auto w-auto">
      <div className="flex justify-between items-center gap-2 text-slate-900 font-medium  w-full">
        {session?.user.image && (
          <Image
            src={Avatar}
            alt="Avatar"
            width={0}
            height={0}
            sizes="100vw"
            className="w-10 h-10 rounded-full"
          />
        )}
        <p className="">{session?.user.name}</p>
        <button
          className="flex justify-center items-center gap-3 w-full"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <ChevronDownIcon
            className={`text-slate-400 w-5 h-5 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {open && (
        <div
          className="absolute right-3 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <Link
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-0"
            >
              Configurações
            </Link>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-1"
            >
              Suporte
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-2"
            >
              Licenças
            </a>
            <form method="POST" action="#" role="none">
              <button
                onClick={() => signOut()}
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                id="menu-item-3"
              >
                Sair
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
