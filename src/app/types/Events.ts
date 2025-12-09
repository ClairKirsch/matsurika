import type { UserInfo } from '@/app/types/User';
import { Venue } from '@/app/types/Venue';

export interface ConferenceEvent {
  id?: number;
  title: string;
  description?: string | null;
  date: string;
  venue_id?: number | null;
  // Optional list of attendees
  attendees?: UserInfo[];
  // Optional venue information if you have a Venue type
  venue?: Venue;
}
