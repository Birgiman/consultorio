import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Register() {
  return (
    <>
      <header className='flex flex-col items-center gap-4 text-center' >
        <h1 className='text-2xl font-bold tracking-[-1px]' >
          Crie sua conta
        </h1>
        <p className='space-x-2' >
          <span className='text-gray-700 tracking-[-0.5px]' >
            Já possui uma conta?
          </span>
          <Link
            to='/auth/login'
            className='tracking-[-0.5px] font-medium text-amber-700' >
            Fazer Login
          </Link>
        </p>
      </header>
      <form className='mt-16 flex flex-col gap-4' >
        <Input
          name='name'
          placeholder='Nome'
        />
        <Input
          type='email'
          name='email'
          placeholder='E-mail'
        />
        <Input
          type='password'
          name='password'
          placeholder='Senha'
        />

        <Button
          type='submit'
          className='mt-2'
        >
          Criar conta
        </Button>
      </form>
    </>
  );
}
