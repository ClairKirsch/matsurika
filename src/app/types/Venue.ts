import type { ConferenceEvent } from '@/app/types/Events';

export interface Venue {
  id?: number;
  name: string;
  address?: string | null;
  capacity?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  events?: ConferenceEvent[];
}
