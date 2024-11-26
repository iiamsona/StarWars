import type { HTMLAttributes } from 'react';
import { forwardRef, useId, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { FormItemContext } from './use-form-field';

export const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = useId();
    const contextValue = useMemo(() => ({ id }), [id]);

    return (
      <FormItemContext.Provider value={contextValue}>
        <div ref={ref} className={cn('space-y-2', className)} {...props} />
      </FormItemContext.Provider>
    );
  }
);

FormItem.displayName = 'FormItem';
