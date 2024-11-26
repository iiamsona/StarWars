import type { FunctionComponent } from 'react';

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon: FunctionComponent;
  label?: string;
  description?: string;
}

export type NavItemWithChildren = {
  items: Array<NavItemWithChildren>;
} & NavItem;

export type NavItemWithOptionalChildren = {
  items?: Array<NavItemWithChildren>;
} & NavItem;
