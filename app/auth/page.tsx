'use client'
import { Button } from "@/components/ui/button"
import { WithRole } from "../ui/components/with-role";
import { useRouter } from "next/navigation";
import ListItems from "./_partial/list-items";
export default function Page() {

  const route = useRouter()

  const handleRedirect = (url: string) => {
    route.push(url)
  }
  return (
    <main
      style={{ height: 'calc(100vh - 64px)' }}
      className="w-screen h-screen"
    >
      <div className="grid grid-cols-2">
        <h1 className="text-center mr-auto ml-1 font-bold text-3xl">Produtos a venda</h1>
        <div className="flex justify-end p-2 gap-2">
          <WithRole allowedRoles={['admin']}>
            <Button onClick={() => handleRedirect('/auth/admin')}>Área administrativa</Button>
          </WithRole>
          <WithRole allowedRoles={['user']}>
            <Button onClick={() => handleRedirect('/auth/profile')}>Meu perfil</Button>
          </WithRole>
        </div>
      </div>

      <ListItems />
    </main>
  );
}