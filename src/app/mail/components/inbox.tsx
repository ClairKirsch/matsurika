"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function InboxClient({ Inbox }: { Inbox: any }) {
  return (
        <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
        <div className="text-2xl mt-4">Inbox</div>
    <div className="w-full max-w-3xl overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full border-collapse bg-white text-left text-sm text-gray-700">
        <thead className="bg-gray-900 uppercase text-xs font-semibold">
          <tr>
            <th className="px-4 py-3 border-b border-gray-900">From:</th>
            <th className="px-4 py-3 border-b border-gray-900">Subject</th>
            <th className="px-4 py-3 border-b border-gray-900">Date</th>
          </tr>
        </thead>
        <tbody>
            {Inbox.map((message: { message_id: string, from: string, from_id: string, subject: string, date: string }, index: number) => (
            <tr
              key={message.message_id}
              className={`transition-colors ${
                index % 2 === 1 ? "bg-gray-900" : "bg-black"
              } hover:bg-blue-50`}
            >
              <td className="border-t border-gray-900 px-4 py-3">
                <Link href={`/profile/${message.from_id}`} className="text-blue-600 hover:underline">
                  {message.from}
                </Link>
              </td>
              <td className="border-t border-gray-900 px-4 py-3">
                <Link href={`/mail/${message.message_id}`} className="text-blue-600 hover:underline">
                  {message.subject}
                </Link>
              </td>
              <td className="border-t border-gray-900 px-4 py-3 font-medium text-gray-800">
                {message.date}
              </td>
            </tr>
          ))}        
          </tbody>
      </table>
    </div>
    </main>
  );
}
