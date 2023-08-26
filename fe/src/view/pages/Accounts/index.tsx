import { ListBulletIcon, PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

export function Accounts() {
  return (
    <div className='flex flex-col w-full h-full bg-indian-khaki-500'>
      <header className='flex items-center justify-between px-4 py-3 gap-4 bg-indian-khaki-600'>
        <div>
          <strong className='text-3xl text-white'>
            PACIENTES
          </strong>
        </div>
        <div className='flex gap-2'>
          <Button className='rounded-md'>
            <TrashIcon className='mr-2' />
                Deletar
          </Button>
          <Button className='text-white hover:text-indian-khaki-300 active:text-indian-khaki-500'>
            <ListBulletIcon className='mr-2' />
                Filtros
          </Button>
          <Button className='text-indian-khaki-300'>
            <PlusIcon className='mr-2' />
                Nova consulta
          </Button>
        </div>
      </header>
    </div>
  );
}
