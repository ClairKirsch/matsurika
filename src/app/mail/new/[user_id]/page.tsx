import { redirect } from 'next/navigation';

export default function SendMail({ params }: { params: { user_id: string } }) {
  async function handleSubmit(formData: FormData) {
    'use server';

    const subject = formData.get('subject');
    const content = formData.get('content');
    // TODO: send message logic here

  }
  
  // Auto-resize textarea
  function handleInput(e: React.FormEvent<HTMLTextAreaElement>) {
    const target = e.currentTarget;
    target.style.height = "auto"; // reset height
    target.style.height = `${target.scrollHeight}px`; // expand to fit content
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
      <h1 className="text-4xl font-bold">Send Message</h1>
      <form action={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="p-3 border border-gray-300 rounded"
        />
        <textarea
          name="content"
          placeholder="Type your message..."
          rows={6}
          className="p-3 border border-gray-300 rounded text-white resize-none align-top block w-full h-80 leading-relaxed"
          style={{ display: "block", textAlign: "left", whiteSpace: "pre-wrap"}}
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition w-40"
          >
            Send Message
          </button>
        </div>
      </form>
    </main>
  );
}
