import Image from "next/image";
import RegisterForm from "./_partial/register-form";

export default function Page() {
  return (
    <main className="flex items-center justify-between  md:h-screen">
      <div>
      </div>
      <div className="w-1/2 h-screen mr-16 flex flex-col items-center justify-center gap-2 rounded-lg">
        <RegisterForm />
      </div>
    </main>
  )
}