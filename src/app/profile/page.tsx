import { redirect } from 'next/navigation';
import ProfileClient from './components/profile_page';
import { cookies } from 'next/headers';
import { UserProfile } from '../types/user';

export default async function ProfilePage() {
  
  const apiUrl = process.env.API_URL || 'http://localhost:8000';
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/login');
  }

  const response = await fetch(`${apiUrl}/users/me/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch profile data: ${response.status}`);
  }
  const profileInfo = (await response.json()) as UserProfile;
  console.log(profileInfo);
  return <ProfileClient profileInfo={profileInfo} />;
}
