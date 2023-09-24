import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import { capitalizeFirstLetter } from '../../app/utils/capitalizeFirstLetters';

interface DatePickerProps {
  value: Date;
  onChange(date: Date): void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <DayPicker
      mode="single"
      selected={value}
      onSelect={(date) => onChange(date ?? new Date())}
      locale={ptBR}
      weekStartsOn={1}
      showOutsideDays
      fixedWeeks
      classNames={{
        caption: 'flex items-center justify-between underline underline-offset-4 text-xl',
        nav: 'flex gap-1',
        nav_button_previous:
          'text-black flex items-center justify-center !bg-transparent',
        nav_button_next:
          'text-black flex items-center justify-center !bg-transparent',
        head_cell: 'uppercase px-1 pt-1 pb-2 text-gray-900',
        button:
          'font-black cursor-pointer w-10 h-10 hover:bg-spectra-600 hover:text-white rounded-full',
        day_today: 'bg-indian-khaki-700 font-bold text-white',
        day_selected: '!bg-teal-900 text-white font-medium',
        day_outside: 'text-gray-600 font-medium',
      }}
      formatters={{
        formatCaption: (date, options) => {
          return (
            <span className='text-black tracking-tighter font-medium'>
              {capitalizeFirstLetter(format(date, 'LLLL yyyy', options))}
            </span>
          );
        }
      }}
    />
  );
}
