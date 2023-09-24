import { CalendarIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { DatePicker } from './DatePicker';
import { Popover } from './Popover';

interface DatePickerInputProps {
  value?: Date;
  onChange?(date: Date): void;
}

export function DatePickerInput({ value, onChange }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(value ?? new Date());

  function handleChangeDate(date: Date) {
    setSelectedDate(date);
    onChange?.(date);
  }

  return (
    <Popover.Root>
      <Popover.Trigger>
        <button type='button' className='ml-4'>
          <CalendarIcon className='w-7 h-7'/>
        </button>
      </Popover.Trigger>
      <Popover.Content>
        <DatePicker value={selectedDate} onChange={handleChangeDate}/>
      </Popover.Content>
    </Popover.Root>
  );
}
