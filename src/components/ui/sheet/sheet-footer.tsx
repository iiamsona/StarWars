import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const SheetFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
);

SheetFooter.displayName = 'SheetFooter';
