import { CheckIcon, CheckboxIcon, Cross1Icon, HamburgerMenuIcon, ListBulletIcon, PlusIcon, ResetIcon, TrashIcon } from '@radix-ui/react-icons';
import { cn } from '../../../app/utils/cn';
import { formateTimeSlotReservation } from '../../../app/utils/formatTimeSlotReservation';
import { Button } from '../../components/Button';

const patients = [
  {
    id: 'c0c13835-b645-4019-a155-725880fa68f7',
    name: 'Eduardo B',
    cpf: '12345678912345',
    email: 'client+1@mail.com',
    birthDate: '2023-08-11T15:44:23.460Z',
    localBirth: 'POA - RS',
    cid: '456451651',
    phoneNumber: '+5511996543652',
    acupunCode: 'ELETRICA',
    timeSlotReservation: [{
      id: '28a35fb3-3a69-43ab-b5c7-9d8436413b95',
      clientId: 'c0c13835-b645-4019-a155-725880fa68f7',
      date: '2023-08-11T17:00:49.570Z',
      status: 'CONFIRMED',
      period: 'AFTERNOON'
    }]
  },
  {
    id: 'c0c13835-g645-4019-a155-725880fa68f7',
    name: 'Rafael Rodrigues',
    cpf: '12345678912343',
    email: 'client+2@mail.com',
    birthDate: '2023-08-11T15:44:23.460Z',
    localBirth: 'POA - RS',
    cid: '456451651',
    phoneNumber: '+5511996543652',
    acupunCode: 'ELETRICA',
    timeSlotReservation: [{
      id: '28a35fb3-3a69-43ab-b5c7-9d8436413b95',
      clientId: 'c0c13835-b645-4019-a155-725880fa68f7',
      date: '2023-08-11T10:30:49.570Z',
      status: 'SCHEDULED',
      period: 'MORNING'
    }]
  },
  {
    id: 'c1c13835-b645-4019-a155-725880fa68f7',
    name: 'Jorge Amaral',
    cpf: '12345678912346',
    email: 'client+3@mail.com',
    birthDate: '2023-08-11T11:01:23.460Z',
    localBirth: 'POA - RS',
    cid: '456451651',
    phoneNumber: '+5511996543652',
    acupunCode: 'ELETRICA',
    timeSlotReservation: [{
      id: '28a35fb3-3a69-43ab-b5c7-9d8436413b95',
      clientId: 'c0c13835-b645-4019-a155-725880fa68f7',
      date: '2023-08-11T13:30:49.570Z',
      status: 'CANCELED',
      period: 'EVENING'
    }]
  },
];


export function Dashboard() {
  return (
    <div className='w-full h-full flex items-center justify-center p-4'>
      <main className='flex w-full h-full bg-indian-khaki-500'>
        <div className='w-1/4 h-full'>
          <div className='bg-green-500 h-1/2'>
            Próxima consulta
          </div>
          <div className='bg-pink-500 h-1/2'>
            Aniversario
          </div>
        </div>
        <div className='w-3/4 h-full flex flex-row bg-blue-500'>
          <div className='w-full overflow-auto'>
            <header className='flex items-center justify-between px-4 py-3 gap-4 bg-indian-khaki-600'>
              <div>
                <strong className='text-3xl text-white'>
                AGENDA
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
            <table className='table w-full text-left whitespace-nowrap'>
              <thead className='table-header-group'>
                <tr className='table-row bg-gray-300'>
                  <th className='table-cell text-center py-5'>
                    <button className=''>
                      <CheckboxIcon className='w-6' />
                    </button>
                  </th>
                  <th className='py-3 px-2'>Nome</th>
                  <th className='py-3 px-2'>Tratamento</th>
                  <th className='py-3 px-2'>Horário</th>
                  <th className='py-3 px-2'>Status</th>
                  <th className='py-3 px-2 w-[20px] text-center'>Alterar status</th>
                </tr>
              </thead>
              <tbody className='table-row-group'>
                {patients.map((patient, index) => (
                  <tr key={patient.id} className={cn(
                    index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200',
                  )}>
                    <th className='table-cell text-center px-2'>
                      <button>
                        <CheckboxIcon className='w-6' />
                      </button>
                    </th>
                    <th className='table-cell px-2'>{patient.name}</th>
                    <td className='table-cell px-2'>{patient.cid}</td>
                    <td className='table-cell px-2'>
                      {patient.timeSlotReservation.map(reservation =>
                        formateTimeSlotReservation(new Date(reservation.date))
                      )}
                    </td>
                    <td className='table-cell px-2'>
                      {patient.timeSlotReservation.map(reservation => reservation.status)}
                    </td>
                    <td className='table-cell text-center space-x-4'>
                      <div className='inline-flex gap-2 py-2 px-4'>
                        <button className='flex items-center justify-center bg-green-500 border rounded-md py-[1px] px-1'>
                          <CheckIcon className='w-6' />
                        Confirmar
                        </button>
                        <button className='flex items-center justify-center bg-yellow-500 border rounded-md py-[1px] px-1'>
                          <ResetIcon className='w-6' />
                        Reagendar
                        </button>
                        <button className='flex items-center justify-center bg-red-500 border rounded-md py-[1px] px-1'>
                          <Cross1Icon className='w-6' />
                        Cancelar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='bg-red-500 py-3 px-4'>
            <HamburgerMenuIcon />
          </div>
        </div>
      </main>
    </div>
  );
}
