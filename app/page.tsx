import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex flex-col">
      <div className="flex items-center justify-between w-full p-0">
        <div className="flex flex-col justify-center h-screen w-1/2 rounded-lg ml-8">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Desafio waving test</strong><br></br>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-waving-primary-light px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-waving-primary-light/50 md:text-base"
          >
            <span>Acessar e-comerce</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <p className='bottom-0 left-0 absolute m-1'>Desenvolvido por
            <a className='text-waving-primary-light' href='https://github.com/gabrielolivra/hub-local-desafio' target='_blank'> Gabriel Bernardino de Oliveira</a>
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src="/favicon.ico"
            width={600}
            height={800}
            className="w-screen h-screen"
            quality={100}
            alt=""
          />
        </div>
      </div>
    </main >
  );
}
