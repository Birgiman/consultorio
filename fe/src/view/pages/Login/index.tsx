import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useLoginController } from './useLoginController';

export function Login() {

  const { register, handleSubmit, errors, isLoading } = useLoginController();

  return (
    <>
      <header className='flex flex-col items-center gap-4' >
        <h1 className='text-2xl font-bold tracking-[-1px]' >
          Entre em sua conta
        </h1>
        <p className='space-x-2' >
          <span className='text-gray-700 tracking-[-0.5px]' >
            Não possui uma conta?
          </span>
          <Link
            to='/auth/register'
            className='tracking-[-0.5px] font-medium text-spectra-700' >
            Criar conta
          </Link>
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className='mt-16 flex flex-col gap-4'
      >
        <Input
          type='email'
          placeholder='E-mail'
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          type='password'
          placeholder='Senha'
          error={errors.password?.message}

          {...register('password')}
        />

        <Button
          type='submit'
          className='mt-2'
          isLoading={isLoading}
        >
          Entrar
        </Button>
      </form>
    </>
  );
}