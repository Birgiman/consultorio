import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { clientsService } from '../services/clientsService';

export function useClients() {
  const queryClient = useQueryClient();

  const { data: clients = [], isLoading, error } = useQuery({
    queryKey: ['clients'],
    queryFn: clientsService.getAll,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  const { mutateAsync: createClient, isLoading: isCreating } = useMutation({
    mutationFn: clientsService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      toast.success('Paciente criado com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao criar paciente. Tente novamente.');
    },
  });

  const { mutateAsync: updateClient, isLoading: isUpdating } = useMutation({
    mutationFn: clientsService.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      toast.success('Paciente atualizado com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao atualizar paciente. Tente novamente.');
    },
  });

  const { mutateAsync: removeClient, isLoading: isRemoving } = useMutation({
    mutationFn: clientsService.remove,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      toast.success('Paciente removido com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao remover paciente. Tente novamente.');
    },
  });

  return {
    clients,
    isLoading,
    error,
    createClient,
    updateClient,
    removeClient,
    isCreating,
    isUpdating,
    isRemoving,
  };
}
