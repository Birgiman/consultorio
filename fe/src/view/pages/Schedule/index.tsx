import { ListBulletIcon, PlusIcon, TrashIcon } from '@radix-ui/react-icons';

import { Button } from '../../components/Button';
import { Table } from './components/Table';

export function Schedule() {
  return (
    <div className='w-full h-full bg-indian-khaki-300 rounded-xl flex shadow-md shadow-indian-khaki-600'>
      <div className='rounded-2xl bg-indian-khaki-200 w-full my-8 mx-4 border-spectra-500 border-[1.5px] shadow-md shadow-indian-khaki-500'>
        <header className='flex items-center justify-between px-4 py-3 gap-4'>
          <strong className='text-3xl text-spectra-600'>
              AGENDA
          </strong>
          <div className='flex gap-2 text-lg'>
            <Button className='text-white hover:text-indian-khaki-300 active:text-indian-khaki-500 shadow-md shadow-indian-khaki-500'>
              <TrashIcon className='mr-2' />
                Deletar
            </Button>
            <Button className='text-white hover:text-indian-khaki-300 active:text-indian-khaki-500 shadow-md shadow-indian-khaki-500'>
              <ListBulletIcon className='mr-2' />
                Filtros
            </Button>
            <Button className='text-white hover:text-indian-khaki-300 active:text-indian-khaki-500 shadow-md shadow-indian-khaki-500'>
              <PlusIcon className='mr-2' />
                Nova consulta
            </Button>
          </div>
        </header>
        <Table />
      </div>
    </div>
  );
}
