"use client";

import Image from 'next/image';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

export default function VenueClient({ venueInfo }: { venueInfo: any }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
      <Image
        src={venueInfo.eventPicture}
        alt="Event picture"
        width={150}
        height={150}
        className="rounded-full"
      />
      <div className="text-2xl mt-4">{venueInfo.name}</div>
      <MapContainer
        center={[venueInfo.latitude, venueInfo.longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '400px', width: '50%', borderRadius: '12px' }}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </MapContainer>

      <br></br>
    <div className="w-full max-w-3xl overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full border-collapse bg-white text-left text-sm text-gray-700">
        <thead className="bg-gray-900 uppercase text-xs font-semibold">
          <tr>
            <th className="px-4 py-3 border-b border-gray-900">Event</th>
            <th className="px-4 py-3 border-b border-gray-900">Date</th>
          </tr>
        </thead>
        <tbody>
            {venueInfo.events.map((event: { name: string; eventid: string, date: string }, index: number) => (
            <tr
              key={event.name}
              className={`transition-colors ${
                index % 2 === 1 ? "bg-gray-900" : "bg-black"
              } hover:bg-blue-50`}
            >
              <td className="border-t border-gray-900 px-4 py-3">
                <Link href={`/event/${event.eventid}`} className="text-blue-600 hover:underline">
                  {event.name}
                </Link>
              </td>
              <td className="border-t border-gray-900 px-4 py-3 font-medium text-gray-800">
                {event.date}
              </td>
            </tr>
          ))}        
          </tbody>
      </table>
    </div>
    </main>
  );
}
