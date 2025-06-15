'use client'
import { getUserFromToken } from '@/app/lib/helpers/get-user-from-token';
import { useSession } from 'next-auth/react';
import { ReactNode, useEffect, useState } from 'react';
interface WithRoleProps {
  allowedRoles: ('admin' | 'user')[];
  children: ReactNode;
}

export function WithRole({ allowedRoles, children }: WithRoleProps) {
  const [canRender, setCanRender] = useState(false);
    const  a = useSession();
console.log(a.data?.user);
  useEffect(() => {
    const user = getUserFromToken(a.data?.user?.access_token);
    console.log(user)
    if (user && allowedRoles.includes(user.role)) {
      setCanRender(true);
    }
  }, []);

  if (!canRender) return null;

  return <>{children}</>;
}
