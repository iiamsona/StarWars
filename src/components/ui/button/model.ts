import { cva } from 'class-variance-authority';
import { type ButtonProps } from './button';

export const types = {
  starwaryellow: 'var(--color-starwar-yellow)',
  starwarblue: 'var(--color-starwar-blue)',
  starwarpink: 'var(--color-starwar-pink)',
  starwarred: 'var(--color-starwar-red)',
  starwarorange: 'var(--color-starwar-orange)',
  starwargray: 'var(--color-starwar-gray)',

  sm: 'h-[20px] w-[20px]',
  md: 'h-[24px] w-[24px]',
  lg: 'h-[28px] w-[28px]'
};

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        none: '',
        // primary
        primaryStarwaryellow: 'bg-backgroundColor-starwaryellow',
        primaryStarwarblue: 'bg-backgroundColor-starwarblue',
        primaryStarwarpink: 'bg-backgroundColor-starwarpink',
        primaryStarwarred: 'bg-backgroundColor-starwarred',
        primaryStarwargray: 'bg-backgroundColor-starwargray',
        primaryStarwarorange: 'bg-backgroundColor-starwarorange'
      },
      size: {
        sm: 'h-9 w-40 rounded-primary py-2 px-4 font-t4-semibold text-t4',
        md: 'h-10 w-48 rounded-primary py-2 px-6 font-t5-semibold text-t5',
        lg: 'h-10 w-52 rounded-primary py-2 px-4 font-t6-semibold text-t6',
        iconSm: 'h-9 w-9 p-2',
        iconMd: 'h-10 w-10 p-2',
        iconLg: 'h-11 w-11 p-2'
      }
    },
    defaultVariants: {
      variant: 'primaryStarwaryellow',
      size: 'sm'
    }
  }
);

export const useModel = ({ variant }: ButtonProps) => {
  const getStrokeColor = () => {
    const strokeColor = types[variant || 'primaryStarwaryellow'];
    return strokeColor;
  };
  const color = getStrokeColor();

  return {
    color
  };
};
