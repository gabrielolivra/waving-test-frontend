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
    const  session = useSession();
  useEffect(() => {
    const user = getUserFromToken(session.data?.user?.access_token);
    if (user && allowedRoles.includes(user.role)) {
      setCanRender(true);
    }
  }, []);

  if (!canRender) return null;

  return <>{children}</>;
}
