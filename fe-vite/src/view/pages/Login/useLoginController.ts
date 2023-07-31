import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().nonempty('E-mail é obrigatório.').email('Informe um E-mail válido.'),
  password: z.string().nonempty('Senha é obrigatória.').min(8, 'A senha deve conter no mínimo 8 dígitos.'),
});

type FormData = z.infer<typeof schema>

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    const result = schema.safeParse(data);
    console.log({result});
  });
  console.log({errors});

  return { register, handleSubmit, errors };
}
