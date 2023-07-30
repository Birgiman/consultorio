import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export function Input({ placeholder, name, id, ...props }: InputProps) {

  const inputId = id ?? name;

  return (
    <div className='relative'>
      <input
        {...props}
        name={name}
        id={inputId}
        className='bg-white w-full rounded-lg border border-gray-500 pt-4 px-3 h-14 text-gray-800 placeholder-shown:pt-0 peer focus:border-amber-800 transition-all outline-none'
        placeholder=' '
      />
      <label
        htmlFor={inputId}
        // className='absolute left-[13px] top-4 pointer-events-none text-gray-700'
        className='absolute left-[13px] top-2 pointer-events-none text-xs text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 transition-all'
      >
        {placeholder}
      </label>
    </div>
  );
}
