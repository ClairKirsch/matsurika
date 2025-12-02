import ProfileClient from '../components/profile_page';
import { cookies } from 'next/headers';

export default async function ProfilePage({ params }: { params: { user_id: string } }) {
  
  const resolvedParams = await params; 
  const userId = resolvedParams.user_id;

  const apiUrl = process.env.API_URL || 'http://localhost:8000';
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    throw new Error('No access token found. Please log in.');
  }

  const response = await fetch(`${apiUrl}/users/${userId}`, {
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
  const profileInfo = await response.json();
  console.log(profileInfo);
  return <ProfileClient profileInfo={profileInfo} />;
}
