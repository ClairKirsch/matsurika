import ProfileClient from '../components/profile_page';

export default async function ProfilePage({ params }: { params: { event_id: string } }) {
  const resolvedParams = await params;
  const eventInfo = {
    name: 'Jane Doe\'s Event',
    bio: 'An exciting event hosted by Jane Doe. Join us for a day of fun and learning!',
    venue: 'Sample Venue',
    tags: ['Music', 'Art', 'Technology'],
    eventPicture: '/profile-placeholder.png',
    attendants: [
        { name: 'Attendant 1', attendant_id: '1', capacity: "Speaker" },
        { name: 'Attendant 2', attendant_id: '2', capacity: "Guest" },
        { name: 'Attendant 3', attendant_id: '3', capacity: "VIP" },
    ],
  };

  return <ProfileClient eventInfo={eventInfo} />;
}
