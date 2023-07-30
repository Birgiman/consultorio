import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {

}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className='bg-amber-700 hover:bg-amber-600 active:bg-amber-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all'
    />
  );
}
