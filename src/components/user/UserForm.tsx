"use client";
import { Input } from "@/components/Input";
import Image from "next/image";
import ImageTest from "../../../public/pattern.png";
import Aurora from "../../../public/aurora2.png";
import Error from "../Error";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginType, loginSchema } from "@/schema/login";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginType) => {
    if (data) {
      try {
        setError(null);
        setloading(true);
        const response = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
          callbackUrl: "/",
        });
        if (response?.error) {
          setError("Email ou senha inválida");
          reset();
        } else {
          router.push("/");
        }
      } catch (error: any) {
        setError(error);
        console.log("Error:", error);
      } finally {
        setloading(false);
      }
    }
  };

  return (
    <main className="">
      <div className="relative h-[100vh] w-full bg-no-repeat bg-center bg-cover">
        <div className="bg-slate-200 w-full h-full grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:flex items-center h-[100vh] w-[50vw]">
            <Image
              className="object-cover h-[80%] w-full"
              src={ImageTest}
              alt="pattern"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="flex justify-center">
            <div className="px-10 py-16 self-center lg:w-4/5 lg:max-w-md rounded-md w-full">
              <form onClick={handleSubmit(onSubmit)}>
                <div className="pb-16 flex justify-center">
                  <Image
                    className="object-cover h-[80%] w-[80%]"
                    src={Aurora}
                    alt="pattern"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  {/* */}
                  <Input
                    label="Email"
                    id="email"
                    type="email"
                    {...register("email", { required: true, minLength: 3 })}
                    errors={errors.email}
                  />
                  <Input
                    label="Password"
                    id="password"
                    type="password"
                    {...register("password", { required: true, minLength: 3 })}
                    errors={errors.password}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-600 py-3 text-white rounded-md w-full mt-10 hover:bg-orange-700 transition"
                >
                  {loading ? "Carregando..." : "Enviar"}
                </button>
                {error && <Error>{error}</Error>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
