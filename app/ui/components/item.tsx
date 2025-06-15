import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

interface itemProps {
  name: string;
  price: number;
  action: () => void
}
export default function Item({ name, price, action }: itemProps) {
  return (
    <div className="m-2 flex flex-col justify-center items-center p-4 border w-[200px] rounded-lg shadow-md max-w-sm bg-white">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <Image
        src="https://placehold.co/200x200.png"
        width={200}
        height={200}
        alt="Placeholder"
      />
      <p className="text-gray-600 mt-2">Preço: {price}</p>
      <Button
        onClick={action}
        className="mt-4;
 bg-black w-full text-white rounded hover:bg-gray-800 transition"
      >
        Detalhes
      </Button>
    </div>
  );
}
