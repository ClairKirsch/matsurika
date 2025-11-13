import ProfileClient from '../components/profile_page';

export default async function ProfilePage({ params }: { params: { user_id: string } }) {
  const resolvedParams = await params;
  const profileInfo = {
    name: 'Jane Doe',
    bio: 'A short bio about Jane Doe. Passionate about web development and design.',
    profilePicture: '/profile-placeholder.png',
    events: [
        { venue: 'Venue A', eventname: 'Event 1', eventid: '1' },
        { venue: 'Venue B', eventname: 'Event 2', eventid: '2' },
        { venue: 'Venue C', eventname: 'Event 3', eventid: '3' },
        { venue: 'Venue D', eventname: 'Event 4', eventid: '4' },
    ],
  };

  return <ProfileClient profileInfo={profileInfo} />;
}
