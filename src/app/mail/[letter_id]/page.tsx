import MessageClient from "../components/message";
export default async function MailPage() {
    const MessageData = {
        message_id: '1',
        from: 'test',
        from_id: '1',
        subject: 'Hello World',
        date: '2024-10-15',
        content: 'This is the content of the message.'
    }
    return <MessageClient Message={MessageData} />;
}