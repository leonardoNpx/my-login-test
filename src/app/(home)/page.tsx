import SignOutButton from "./components/SignOutButton";
import { authConfig } from "@/config/authConfig";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authConfig);
  if (!session) {
    redirect("/auth");
  }

  console.log(session);

  return (
    <main className="p-4 flex justify-between">
      <h1 className="text-3xl truncate">
        Bem vindo, <span className="font-bold">{session?.user?.role}</span>
      </h1>
      <SignOutButton />
    </main>
  );
}
