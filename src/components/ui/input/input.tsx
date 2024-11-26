import type { InputHTMLAttributes, ElementType } from 'react';
import { forwardRef, useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { IconSearch, IconCrossLarge, IconAI, IconLoading } from '@/components/ui/icons';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  showIconSearch?: boolean;
  showIconCross?: boolean;
  showIconAI?: boolean;
  loading?: boolean;
  color?: string;
  darkColor?: string;
  label?: string;
  iconType?: ElementType;
  toggleInputs?: boolean;
  onToggle?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      showIconSearch = false,
      showIconCross = false,
      showIconAI = false,
      color = 'transparent',
      darkColor,
      label,
      iconType: Icon,
      toggleInputs,
      onToggle,
      ...props
    },
    ref
  ) => {
    const [loading, setLoading] = useState(false);
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleChange = () => {
      setLoading(true);
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      typingTimeoutRef.current = setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    useEffect(() => {
      return () => {
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }
      };
    }, []);

    return (
      <div className="flex w-full min-w-s160 flex-col">
        {label && <p className="mb-s4 ml-s4 mt-s16 text-t4 font-t4-semibold">{label}</p>}
        <div className="relative flex items-center">
          {showIconSearch && !loading && (
            <IconSearch className=" w-[24px]absolute left-3 h-[24px] cursor-pointer text-muted-foreground" />
          )}
          {loading && (
            <IconLoading className="absolute left-3 h-[24px] w-[24px] animate-spin text-muted-foreground" />
          )}
          <input
            type={type}
            onChange={handleChange}
            className={cn(
              darkColor ? `bg-${darkColor}` : `bg-${color}`,
              'flex h-10 w-full rounded-primary px-3 py-1 text-t4 font-t4-medium shadow-sm transition-colors file:bg-transparent file:text-t4 file:font-t4-medium placeholder:text-muted-foreground disabled:cursor-default disabled:opacity-50',
              showIconSearch && 'pl-10',
              showIconAI && 'pr-s136',
              showIconCross && 'pr-s32',
              loading && 'pl-10',
              className
            )}
            ref={ref}
            {...props}
          />
          {showIconCross && (
            <IconCrossLarge className="absolute right-3 h-[24px] w-[24px] cursor-pointer text-muted-foreground" />
          )}
          {showIconAI && (
            <div className="border-3 absolute right-s2 flex w-s136 cursor-pointer items-center justify-between rounded-primary border border-backgroundColor-negative px-s8 py-s6 text-muted-foreground">
              <IconAI className="h-[20px] w-[20px] cursor-pointer" />
              <p className="text-t4 font-t4-semibold ">Write with AI</p>
            </div>
          )}
          {Icon && toggleInputs && (
            <Icon
              className="absolute right-3 h-[24px] w-[24px] cursor-pointer text-muted-foreground"
              onClick={onToggle}
            />
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
