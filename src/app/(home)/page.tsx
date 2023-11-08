import { authConfig } from "@/config/authConfig";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authConfig);
  if (!session) {
    redirect("/auth");
  }

  return (
    <>
      <div className="p-4 flex justify-between">content</div>
    </>
  );
}
