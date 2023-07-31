import { CrossCircledIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from 'react';
import { cn } from '../../app/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, name, id, error, className, ...props }, ref) => {

  const inputId = id ?? name;

  return (
    <div className='relative'>
      <input
        {...props}
        ref={ref}
        name={name}
        id={inputId}
        className={cn(
          'bg-white w-full rounded-lg border border-gray-500 pt-4 px-3 h-14 text-gray-800 placeholder-shown:pt-0 peer focus:border-amber-800 transition-all outline-none',
          error && '!border-red-500',
          className,
        )}
        placeholder=' '
      />
      <label
        htmlFor={inputId}
        className='absolute left-[13px] top-2 pointer-events-none text-xs text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 transition-all'
      >
        {placeholder}
      </label>
      {error && (
        <div className='flex mt-2 space-x-2 items-center text-red-500' >
          <CrossCircledIcon />
          <span
            className='text-xs'
          >
            {error}
          </span>
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';
