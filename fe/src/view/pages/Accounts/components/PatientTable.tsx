import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { format } from 'date-fns';
import { Client } from '../../../../app/services/clientsService';

interface PatientTableProps {
  clients: Client[];
  onEdit: (client: Client) => void;
  onDelete: (id: string) => void;
  isLoading?: boolean;
}

export function PatientTable({ clients, onEdit, onDelete, isLoading }: PatientTableProps) {
  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-96'>
        <p className='text-white text-xl'>Carregando pacientes...</p>
      </div>
    );
  }

  if (clients.length === 0) {
    return (
      <div className='flex items-center justify-center h-96'>
        <p className='text-white text-xl'>Nenhum paciente cadastrado</p>
      </div>
    );
  }

  return (
    <div className='rounded-xl border-spectra-500 border-y-[1.5px] mt-4 mx-4'>
      <div className='flex w-full items-center bg-indian-khaki-300 py-3 pr-2.5 rounded-t-xl border-b-[0.5px] border-spectra-500'>
        <div className='flex w-full items-center justify-between space-x-2 py-2 text-lg px-4'>
          <div className='flex items-center w-1/5'>
            <strong>Nome</strong>
          </div>
          <div className='flex items-center w-1/6'>
            <strong>CPF</strong>
          </div>
          <div className='flex items-center w-1/5'>
            <strong>Email</strong>
          </div>
          <div className='flex items-center w-1/6'>
            <strong>Telefone</strong>
          </div>
          <div className='flex items-center w-1/6'>
            <strong>Data Nasc.</strong>
          </div>
          <div className='text-center w-1/6'>
            <strong>Ações</strong>
          </div>
        </div>
      </div>
      <ScrollArea.Root className="h-[460px] laptop:h-[610px] rounded-b-xl overflow-hidden bg-white">
        <ScrollArea.Viewport className="w-full h-full">
          {clients.map(client => (
            <div key={client.id} className='flex w-full items-center bg-indian-khaki-100 odd:bg-indian-khaki-200 mb-[5px] py-3 px-4 shadow-md shadow-indian-khaki-400 hover:bg-indian-khaki-300 rounded-sm transition-all ease-in'>
              <div className='flex w-full items-center justify-between space-x-2'>
                <p className='w-1/5 tracking-tight overflow-hidden text-ellipsis'>{client.name}</p>
                <p className='w-1/6'>{client.cpf}</p>
                <p className='w-1/5 overflow-hidden text-ellipsis'>{client.email}</p>
                <p className='w-1/6'>{client.phoneNumber}</p>
                <p className='w-1/6'>
                  {format(new Date(client.birthDate), 'dd/MM/yyyy')}
                </p>
                <div className='flex items-center justify-center gap-2 w-1/6'>
                  <button
                    className='flex items-center justify-center bg-spectra-600 text-white border rounded-md px-3 py-1 hover:bg-spectra-700 active:bg-spectra-500 transition-all'
                    onClick={() => onEdit(client)}
                  >
                    <Pencil1Icon className='w-4 h-4 mr-1' />
                    Editar
                  </button>
                  <button
                    className='flex items-center justify-center bg-red-500 text-white border rounded-md px-3 py-1 hover:bg-red-700 active:bg-red-400 transition-all'
                    onClick={() => onDelete(client.id)}
                  >
                    <TrashIcon className='w-4 h-4 mr-1' />
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 rounded-[10px] bg-indian-khaki-500 transition-colors duration-[160ms] ease-out hover:bg-indian-khaki-500/80 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="flex-1 bg-indian-khaki-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 rounded-[10px] bg-indian-khaki-500/60 transition-colors duration-[160ms] ease-out hover:bg-indian-khaki-500 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="flex-1 bg-indian-khaki-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-indian-khaki-600" />
      </ScrollArea.Root>
    </div>
  );
}
