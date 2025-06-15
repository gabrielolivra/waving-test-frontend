import LoginForm from './_partial/login-form';
export default function LoginPage() {
  return (
    <main className="flex items-center justify-between  md:h-screen">
      <div className='w-1/2'>
        <h1 className='text-center font-bold text-3xl'>Desafio waving test</h1>
        <p className='text-center mt-2'>Acesse sua conta aqui!</p>
      </div>
      <div className="w-1/2 h-screen mr-16 flex flex-col items-center justify-center gap-2 rounded-lg">
        <LoginForm />
      </div>
    </main>
  );
}
