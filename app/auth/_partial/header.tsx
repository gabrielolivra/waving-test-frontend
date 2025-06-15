'use client'
import ProfileDropdown from "./profile-dropdown";
import { useSearchParams } from "next/navigation";
import { Session } from "next-auth";

export default function Header({ session }: { session: Session | null }) {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-16 bg-white shadow-md z-50">
      <div><p className="font-bold ml-2">Waving test</p></div>
      <ProfileDropdown
        userName={session?.user?.name || 'Usuário'}
      />
    </header>
  )
}