'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import ModalItems from './_partial/modal-items'

interface Item {
  id: number
  nome: string
  preco: number
}

export default function Page() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, nome: 'Item 1', preco: 10.0 },
    { id: 2, nome: 'Item 2', preco: 20.5 },
  ])


  return (
    <>
      <div className='flex justify-between'>
        <Button className='m-2'>Voltar</Button>
        <h1 className='font-bold text-2xl'>Lista de item</h1>
        <Button className='m-2'>Adicionar novo item</Button>

      </div>
      <div className="p-6">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow-sm">
              <div><strong>Nome:</strong> {item.nome}</div>
              <div><strong>Preço:</strong> R$ {item.preco.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      </div>
      <ModalItems closeModal={()=> console.log()} isOpen={true}/>
    </>
  )
}
