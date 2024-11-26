import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import { forwardRef } from 'react';
import { Content, Close } from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { sheetVariants } from './model';
import { SheetOverlay, SheetPortal } from './index';

interface SheetContentProps
  extends ComponentPropsWithoutRef<typeof Content>,
    VariantProps<typeof sheetVariants> {}

export const SheetContent = forwardRef<ElementRef<typeof Content>, SheetContentProps>(
  ({ side = 'right', className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Close>
      </Content>
    </SheetPortal>
  )
);

SheetContent.displayName = Content.displayName;
