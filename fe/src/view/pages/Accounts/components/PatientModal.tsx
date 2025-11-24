import { zodResolver } from '@hookform/resolvers/zod';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ClientAcupunCode, ACUPUN_CODE_LABELS } from '../../../../app/enums/clientAcupunCode';
import { Client } from '../../../../app/services/clientsService';
import { BRAZILIAN_STATES } from '../../../../app/utils/brazilianStates';
import { formatCpf, isValidCpf, normalizeCpf } from '../../../../app/utils/normalizeCpf';
import { formatPhoneNumber, normalizePhoneNumber } from '../../../../app/utils/normalizePhoneNumber';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

const patientSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').min(3, 'Nome deve ter no mínimo 3 caracteres'),
  cpf: z.string().min(1, 'CPF é obrigatório').min(11, 'CPF deve ter 11 dígitos').max(14, 'CPF inválido').refine(isValidCpf, 'CPF inválido'),
  email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
  phoneNumber: z.string().min(1, 'Telefone é obrigatório').min(13, 'Telefone inválido'),
  birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
  birthCity: z.string().min(1, 'Cidade de nascimento é obrigatória'),
  birthState: z.string().min(2, 'Estado é obrigatório').max(2, 'Estado inválido'),
  cid: z.string().min(1, 'CID é obrigatório'),
  acupunCode: z.nativeEnum(ClientAcupunCode, { message: 'Tipo de acupuntura é obrigatório' }),
});

type PatientFormData = z.infer<typeof patientSchema>;

interface PatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PatientFormData) => Promise<void>;
  client?: Client | null;
  isLoading?: boolean;
}

export function PatientModal({ isOpen, onClose, onSubmit, client, isLoading }: PatientModalProps) {
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
  });

  const cpfValue = watch('cpf');
  const phoneValue = watch('phoneNumber');
  const birthCityValue = watch('birthCity');

  useEffect(() => {
    if (client) {
      const [city, state] = client.localBirth.split(' ').filter(Boolean);
      reset({
        name: client.name,
        cpf: formatCpf(client.cpf),
        email: client.email,
        phoneNumber: formatPhoneNumber(client.phoneNumber),
        birthDate: client.birthDate.split('T')[0],
        birthCity: city || '',
        birthState: state || '',
        cid: client.cid,
        acupunCode: client.acupunCode as ClientAcupunCode,
      });
    } else {
      reset({
        name: '',
        cpf: '',
        email: '',
        phoneNumber: '',
        birthDate: '',
        birthCity: '',
        birthState: '',
        cid: '',
        acupunCode: undefined,
      });
    }
  }, [client, reset]);

  useEffect(() => {
    if (cpfValue) {
      const formatted = formatCpf(cpfValue);
      if (formatted !== cpfValue) {
        setValue('cpf', formatted, { shouldValidate: true });
      }
    }
  }, [cpfValue, setValue]);

  useEffect(() => {
    if (phoneValue) {
      const formatted = formatPhoneNumber(phoneValue);
      if (formatted !== phoneValue) {
        setValue('phoneNumber', formatted, { shouldValidate: true });
      }
    }
  }, [phoneValue, setValue]);

  // Sugestionar estado baseado na cidade (para implementação futura com localStorage)
  useEffect(() => {
    if (birthCityValue) {
      const savedState = localStorage.getItem(`birthCity_${birthCityValue}`);
      if (savedState && !watch('birthState')) {
        setValue('birthState', savedState);
      }
    }
  }, [birthCityValue, setValue, watch]);

  if (!isOpen) return null;

  const handleFormSubmit = async (data: PatientFormData) => {
    const normalizedData: PatientFormData = {
      ...data,
      cpf: normalizeCpf(data.cpf),
      phoneNumber: normalizePhoneNumber(data.phoneNumber),
      birthCity: data.birthCity,
      birthState: data.birthState,
    };

    console.log('Objeto do paciente criado/atualizado:', normalizedData);

    localStorage.setItem(`birthCity_${data.birthCity}`, data.birthState);

    await onSubmit(normalizedData);
    reset();
  };

  const handleCancelClick = () => {
    reset();
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto'>
        <div className='flex items-center justify-between p-6 border-b border-gray-200'>
          <h2 className='text-2xl font-bold text-gray-900'>
            {client ? 'Editar Paciente' : 'Novo Paciente'}
          </h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600 transition-colors'
          >
            <Cross2Icon className='w-6 h-6' />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className='p-6 space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Nome Completo *
              </label>
              <Input {...register('name')} placeholder='Ex: João Silva' />
              {errors.name && (
                <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                CPF *
              </label>
              <Input {...register('cpf')} placeholder='000.000.000-00' maxLength={14} />
              {errors.cpf && (
                <p className='text-red-500 text-sm mt-1'>{errors.cpf.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Telefone *
              </label>
              <Input {...register('phoneNumber')} placeholder='+55 (11) 99999-9999' maxLength={19} />
              {errors.phoneNumber && (
                <p className='text-red-500 text-sm mt-1'>{errors.phoneNumber.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Data de Nascimento *
              </label>
              <Input {...register('birthDate')} type='date' />
              {errors.birthDate && (
                <p className='text-red-500 text-sm mt-1'>{errors.birthDate.message}</p>
              )}
            </div>

            <div className='md:col-span-2'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Email *
              </label>
              <Input {...register('email')} type='email' placeholder='joao@example.com' />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Cidade de Nascimento *
              </label>
              <Input {...register('birthCity')} placeholder='Ex: Canoas' />
              {errors.birthCity && (
                <p className='text-red-500 text-sm mt-1'>{errors.birthCity.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Estado *
              </label>
              <select
                {...register('birthState')}
                className='w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-spectra-500 focus:border-spectra-500 text-base'
              >
                <option value=''>Selecione um estado</option>
                {BRAZILIAN_STATES.map(state => (
                  <option key={state.code} value={state.code}>
                    {state.name} ({state.code})
                  </option>
                ))}
              </select>
              {errors.birthState && (
                <p className='text-red-500 text-sm mt-1'>{errors.birthState.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                CID *
              </label>
              <Input {...register('cid')} placeholder='Ex: I10' />
              {errors.cid && (
                <p className='text-red-500 text-sm mt-1'>{errors.cid.message}</p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Tipo de Acupuntura *
              </label>
              <select
                {...register('acupunCode')}
                className='w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-spectra-500 focus:border-spectra-500 text-base'
              >
                <option value=''>Selecione um tipo</option>
                {Object.entries(ACUPUN_CODE_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
              {errors.acupunCode && (
                <p className='text-red-500 text-sm mt-1'>{errors.acupunCode.message}</p>
              )}
            </div>
          </div>

          <div className='flex justify-end gap-3 pt-4 border-t border-gray-200'>
            <Button
              type='button'
              onClick={handleCancelClick}
              className='bg-gray-500 hover:bg-gray-600'
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              type='submit'
              disabled={isLoading}
              isLoading={isLoading}
            >
              {client ? 'Atualizar' : 'Criar'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
