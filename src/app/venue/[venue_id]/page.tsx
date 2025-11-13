import VenueClient from '../components/venue_client';

export default async function ProfilePage({ params }: { params: { event_id: string } }) {
  const resolvedParams = await params;
  const venueInfo = {
    name: 'The Jane Doe Convention Center',
    latitude: 37.7749,
    longitude: -1.4194,
    eventPicture: '/profile-placeholder.png',
    events: [
        { name: 'Event 1', eventid: '1', date: '2024-10-15' },
        { name: 'Event 2', eventid: '2', date: '2024-10-15' },
        { name: 'Event 3', eventid: '3', date: '2024-10-15' },
        { name: 'Event 4', eventid: '4', date: '2024-10-15' },
    ],
  };

  return <VenueClient venueInfo={venueInfo} />;
}
