import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../app/hooks/useAuth';

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to='/auth/login' replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to='/dashboard/schedule' replace />;
  }

  return <Outlet />;
}
