import type { ConferenceEvent } from '@/app/types/events';
import type { Message } from '@/app/types/message';

export interface UserInfo {
  id: number;
  username: string;
  email?: string | null;
  full_name?: string | null;
  bio?: string | null;
  profile_image?: string | null;
  events?: ConferenceEvent[];
  messages_sent?: Message[];
  messages_received?: Message[];
}

export interface UserProfile {
  full_name: string;
  bio: string;
  profile_image: string;
  events: ConferenceEvent[];
}
