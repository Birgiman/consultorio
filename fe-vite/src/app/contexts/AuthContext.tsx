import { useQuery } from '@tanstack/react-query';
import { createContext, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { SplashScreen } from '../../view/components/SplashScreen';
import { localStorageKeys } from '../config/localStorageKeys';
import { accountsService } from '../services/accountsService';

interface AuthContextValue {
  signedIn: boolean
  signin(accessToken: string): void
  signout(): void
}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!storedAccessToken;
  });

  const { isError, isFetching, isSuccess, remove } = useQuery({
    queryKey: ['accounts', 'me'],
    queryFn: () => accountsService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);

    console.log('isSuccess', isSuccess);
  }, []);

  const signout = useCallback(() => {

    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setSignedIn(false);

    remove();
  }, [remove]);

  useEffect(() => {

    if (isError) {
      toast.error('Sua sessão expirou.');
      signout();
    }

  }, [isError, signout]);

  return (
    <AuthContext.Provider value={{
      signedIn: isSuccess && signedIn,
      signin,
      signout,
    }}>

      <SplashScreen isLoading={isFetching} />

      {!isFetching && children}
    </AuthContext.Provider>
  );
}

