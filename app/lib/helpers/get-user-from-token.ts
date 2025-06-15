import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  sub: string;
  email: string;
  username: string;
  role: 'admin' | 'user';
  exp: number;
  iat: number;
}

export function getUserFromToken(token: string | undefined): DecodedToken | undefined {

  if (typeof window === 'undefined') return undefined;

  try {
    if (token)
      return jwtDecode<DecodedToken>(token);
  } catch {
    return undefined;
  }
}
