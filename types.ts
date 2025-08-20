
import type { LucideIcon } from 'lucide-react';

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  type: 'Public' | 'Private' | 'Workshop';
  description: string;
  imageUrl: string;
  status: 'Upcoming' | 'Past';
}

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
}
