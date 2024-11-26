import type { ButtonHTMLAttributes, ElementType } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { IconArrowLeftLarge, IconArrowRightLarge, IconLoading } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { buttonVariants, types, useModel } from './model';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  arrowLeft?: boolean;
  arrowRight?: boolean;
  loading?: boolean;
  iconSize?: 'sm' | 'md' | 'lg';
  iconType?: ElementType;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      arrowLeft = false,
      arrowRight = false,
      loading = false,
      iconSize = size || 'sm',
      iconType: Icon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const m = useModel({ variant });
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {Icon && <Icon className={`${types[iconSize]}`} fill={m.color} />}
        {arrowLeft && <IconArrowLeftLarge className={`${types[iconSize]}`} fill={m.color} />}
        {props.children && <p className="m-s6 font-semibold">{props.children}</p>}
        {arrowRight && <IconArrowRightLarge className={types[iconSize]} fill={m.color} />}
        {loading && <IconLoading className={`${types[iconSize]} animate-spin`} fill={m.color} />}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
