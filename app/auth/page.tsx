'use client'
import { WithRole } from "../ui/components/with-role";
export default function Page() {

  return (
    <main
      style={{ height: 'calc(100vh - 64px)' }}
      className="flex flex-col items-center justify-center h-screen bg-gray-200"
    >
      <WithRole allowedRoles={['admin']}>
        <button className="bg-red-500 text-white p-2 rounded">
          Ação somente para Admin
        </button>
      </WithRole>
    </main>
  );
}