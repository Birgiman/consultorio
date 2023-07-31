import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';

interface ButtonProps extends ComponentProps<'button'> {

}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'bg-amber-700 hover:bg-amber-600 active:bg-amber-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all',
        className,
      )}
    />
  );
}
