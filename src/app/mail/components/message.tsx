"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function MessageClient({ Message }: { Message: any }) {
  return (
        <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
        <div className="text-2xl mt-4">Inbox</div>
        <h1 className="text-4xl font-bold">Message Detail</h1>
        <div className="w-full max-w-3xl overflow-x-auto rounded-lg shadow-md border border-gray-200 p-6 bg-black text-white">
          <h2 className="text-2xl font-semibold mb-4">{Message.subject}</h2>
            <p className="mb-2"><strong>From:</strong> {Message.from}</p>
            <p className="mb-2"><strong>Date:</strong> {Message.date}</p>
            <div className="mt-4">
                <p>{Message.content}</p>
            </div>
        </div>
            <button
            type="button"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition w-40"
            onClick={() => window.location.href = `/mail/new/${Message.from_id}`}
            >
            Reply
          </button>

    </main>
  );
}
