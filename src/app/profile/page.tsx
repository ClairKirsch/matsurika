import ProfileClient from '../components/profile_page';

export default async function ProfilePage() {
  const profileInfo = {
    name: 'John Doe',
    bio: 'A short bio about John Doe. Passionate about web development and design.',
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
