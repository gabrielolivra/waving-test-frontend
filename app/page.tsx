import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex flex-col">
      <div className="flex items-center justify-between w-full p-0">
        <div className="flex flex-col justify-center h-screen w-screen items-center rounded-lg ml-8">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Desafio waving test</strong><br></br>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 rounded-lg bg-waving-primary-light px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-waving-primary-light/50 md:text-base"
          >
            <span>Acessar e-comerce</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main >
  );
}
