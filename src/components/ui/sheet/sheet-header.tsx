import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const SheetHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);

SheetHeader.displayName = 'SheetHeader';
