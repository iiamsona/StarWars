import { IconHomeOutline, IconSettings, IconEvent } from '@/components/ui/icons';
import type { NavItem } from '@/types';

export const navItems: Array<NavItem> = [
  {
    title: 'Dashboard',
    href: '/',
    icon: IconHomeOutline,
    label: 'Dashboard'
  },
  {
    title: 'Events',
    icon: IconEvent,
    href: '/events',
    label: 'Events'
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: IconSettings,
    label: 'Settings'
  }
];
