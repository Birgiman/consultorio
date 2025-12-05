import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { ClientAcupunCode } from '../../../app/enums/clientAcupunCode';
import { useClients } from '../../../app/hooks/useClients';
import { Client, CreateClientParams, UpdateClientParams } from '../../../app/services/clientsService';
import { Input } from '../../components/Input';
import { PatientModal } from './components/PatientModal';
import { PatientTable } from './components/PatientTable';

export function Accounts() {
  const { clients, isLoading, createClient, updateClient, removeClient, isCreating, isUpdating } = useClients();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.cpf.includes(searchTerm)
  );

  function handleOpenModal() {
    setSelectedClient(null);
    setIsModalOpen(true);
  }

  function handleEditClient(client: Client) {
    setSelectedClient(client);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedClient(null);
  }

  async function handleSubmit(data: {
    name: string;
    cpf: string;
    email: string;
    birthDate: string;
    cid: string;
    phoneNumber: string;
    acupunCode: ClientAcupunCode;
    birthCity: string;
    birthState: string;
  }) {
    const submitData: CreateClientParams = {
      name: data.name,
      cpf: data.cpf,
      email: data.email,
      birthDate: data.birthDate,
      localBirth: `${data.birthCity} ${data.birthState}`,
      cid: data.cid,
      phoneNumber: data.phoneNumber,
      acupunCode: data.acupunCode,
    };

    if (selectedClient) {
      await updateClient({ id: selectedClient.id, ...submitData } as UpdateClientParams);
    } else {
      await createClient(submitData);
    }
    handleCloseModal();
  }

  async function handleDelete(id: string) {
    const confirmed = window.confirm('Tem certeza que deseja deletar este paciente?');

    if (!confirmed) return;

    await removeClient({ id });
  }

  return (
    <div className='flex flex-col w-full h-full bg-indian-khaki-500'>
      <header className='flex items-center justify-between px-4 py-3 gap-4 bg-indian-khaki-600'>
        <div>
          <strong className='text-3xl text-white'>
            PACIENTES
          </strong>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='relative'>
            <Input
              name='search'
              placeholder='Buscar por nome, email ou CPF...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='pl-10 w-80 bg-white'
            />
            <MagnifyingGlassIcon className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          </div>
          <button
            className='flex items-center bg-spectra-600 text-white px-4 py-2 rounded-md hover:bg-spectra-700 active:bg-spectra-500 transition-all shadow-md'
            onClick={handleOpenModal}
          >
            <PlusIcon className='mr-2 w-5 h-5' />
            Novo Paciente
          </button>
        </div>
      </header>

      <PatientTable
        clients={filteredClients}
        onEdit={handleEditClient}
        onDelete={handleDelete}
        isLoading={isLoading}
      />

      <PatientModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        client={selectedClient}
        isLoading={isCreating || isUpdating}
      />
    </div>
  );
}
