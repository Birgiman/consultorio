import { Navigate, Outlet } from 'react-router-dom';

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const signedIn = false;

  if (!signedIn && isPrivate) {
    return <Navigate to='/auth/login' replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
}
