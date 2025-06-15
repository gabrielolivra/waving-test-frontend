'use client'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import ModalItems from './_partial/modal-items'
import { useApiFunction } from '@/app/hooks/useApiFunction'
import { apiGetItemsStock } from '@/app/lib/services/api/item/item'
import { LoadingComponent } from '@/app/ui/loading'
import { IItemAvailable } from '@/app/lib/contracts/item/item.contract'

export default function Page() {
  const { callApi, data, isFinish, isLoading } = useApiFunction(apiGetItemsStock)
  const [openModal, setOpenModal] = useState(false)

  const handleConfirm = ()=> {
    setOpenModal(false)
    callApi()    
  }

  useEffect(() => {
    callApi()
    return
  }, [])

  return (
    <>
      <div className='flex justify-between'>
        <Button className='m-2'>Voltar</Button>
        <h1 className='font-bold text-2xl'>Lista de item</h1>
        <Button className='m-2' onClick={() => setOpenModal(true)}>Adicionar novo item</Button>

      </div>
      {
        isLoading && <LoadingComponent/>
      }
      {
        data && isFinish && (
          <div className="p-6 h-[400px] overflow-y-auto">
            <ul className="space-y-2">
              {data.map((item: IItemAvailable) => (
                <li key={item.id} className="border p-4 rounded shadow-sm">
                  <div><strong>Nome:</strong> {item.name}</div>
                  <div><strong>Preço:</strong> R$ {item.price}</div>
                </li>
              ))}
            </ul>
          </div>
        )
      }

      {
        openModal && (<ModalItems
          closeModal={() => setOpenModal(false)}
          isOpen={openModal}
          onConfirm={handleConfirm}
        />)
      }
    </>
  )
}
