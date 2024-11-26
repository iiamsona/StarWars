import { useCallback } from 'react';
import { toast } from 'sonner';
import { IconCrossLarge, IconInfoCircleOutline } from '@/components/ui/icons';

type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

type NotifyOptions = {
  message: string;
  position?: ToastPosition;
};

export const useNotify = () => {
  const notify = useCallback(
    (type: 'success' | 'fail' | 'warn', { message, position = 'top-center' }: NotifyOptions) => {
      const iconFill = 'var(--color-text-default)';

      const backgroundColor =
        type === 'success'
          ? 'bg-backgroundColor-success'
          : type === 'fail'
            ? 'bg-backgroundColor-fail'
            : 'bg-backgroundColor-error';

      const actionIcon = <IconCrossLarge fill={iconFill} className="h-[24px] w-[24px]" />;

      const icon = <IconInfoCircleOutline fill={iconFill} className="h-[24px] w-[24px]" />;

      toast(message, {
        icon,
        classNames: {
          toast: `${backgroundColor} rounded-primary`,
          icon: 'mr-s8 ml-s6'
        },
        style: {
          color: iconFill,
          fontSize: 'text-[var(--typography-t5-size)]',
          fontWeight: 'font-[var(--typography-t5-semibold-weight)]'
        },
        action: {
          label: actionIcon,
          onClick: () => console.log('Toast action clicked')
        },
        actionButtonStyle: {
          backgroundColor: 'transparent',
          border: 'none'
        },
        position
      });
    },
    []
  );

  return {
    success: (options: NotifyOptions) => notify('success', options),
    fail: (options: NotifyOptions) => notify('fail', options),
    warn: (options: NotifyOptions) => notify('warn', options)
  };
};
