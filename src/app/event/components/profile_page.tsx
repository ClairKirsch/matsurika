"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function EventClient({ eventInfo }: { eventInfo: any }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
      <Image
        src={eventInfo.eventPicture}
        alt="Event picture"
        width={150}
        height={150}
        className="rounded-full"
      />
      <div className="text-2xl mt-4">{eventInfo.name}</div>
      <div className="text-lg text-gray-600">{eventInfo.bio}</div>
      <div className="text-lg text-gray-600">{eventInfo.venue}</div>
      <div className='text-lg text-gray-600'>{eventInfo.tags.join(", ")}</div>
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
            {eventInfo.attendants.map((event: { name: string; attendant_id: string, capacity: string }, index: number) => (
            <tr
              key={event.name}
              className={`transition-colors ${
                index % 2 === 1 ? "bg-gray-900" : "bg-black"
              } hover:bg-blue-50`}
            >
              <td className="border-t border-gray-900 px-4 py-3">
                <Link href={`/event/${event.attendant_id}`} className="text-blue-600 hover:underline">
                  {event.name}
                </Link>
              </td>
              <td className="border-t border-gray-900 px-4 py-3 font-medium text-gray-800">
                {event.capacity}
              </td>
            </tr>
          ))}        
          </tbody>
      </table>
    </div>
    </main>
  );
}
