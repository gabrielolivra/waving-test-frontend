import Image from "next/image";
import RegisterForm from "./_partial/register-form";

export default function Page() {
  return (
    <main className="flex items-center justify-between  md:h-screen">
      <div className="w-1/2">
         <h1 className='text-center font-bold text-3xl'>Desafio waving test</h1>
        <p className='text-center mt-2'>Cadastre sua conta aqui!</p>
      </div>
      <div className="w-1/2 h-screen mr-16 flex flex-col items-center justify-center gap-2 rounded-lg">
        <RegisterForm />
      </div>
    </main>
  )
}