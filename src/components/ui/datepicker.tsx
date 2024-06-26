import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface DatePickerProps {
  value: Date | undefined;
  disabled?: boolean;
  onSelect: any;
}

export const DatePicker = (props: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'overflow-hidden',
            'justify-start text-left font-normal',
            !props.value && 'text-muted-foreground',
          )}
          disabled={props.disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {props.value ? format(props.value, 'P') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={props.value}
          onSelect={props.onSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
