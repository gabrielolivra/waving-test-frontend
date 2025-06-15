'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const route = useRouter()
  return (
    <div className="w-screen h-full">
      <div>
        <Button onClick={()=> route.push('/auth/admin/item')}>Itens para venda</Button>
      </div>
    </div>
  )
}