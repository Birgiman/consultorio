import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';
import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({ className, isLoading, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || disabled}
      className={cn(
        'bg-spectra-700 hover:bg-spectra-600 active:bg-spectra-800 disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all flex items-center justify-center',
        className,
      )}
    >
      {!isLoading ? children : <Spinner className='w-6 h-6' />}
    </button>
  );
}
