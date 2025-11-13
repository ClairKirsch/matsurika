import InboxClient from "./components/inbox";
export default async function MailPage() {
    const InboxData = [
        { message_id: '1', from: 'test', from_id: '1', subject: 'Hello World', date: '2024-10-15' },
        { message_id: '2', from: 'test', from_id: '1', subject: 'Hello World', date: '2024-10-15' },
        { message_id: '3', from: 'test', from_id: '1', subject: 'Hello World', date: '2024-10-15' },
      ]
    return <InboxClient Inbox={InboxData} />;
}