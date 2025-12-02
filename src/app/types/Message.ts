import type { UserInfo } from '@/app/types/user';

export interface Message {
  id?: number;
  sender_id?: number | null;
  receiver_id?: number | null;
  content: string;
  sender?: UserInfo;   // optional full user object
  receiver?: UserInfo; // optional full user object
}
