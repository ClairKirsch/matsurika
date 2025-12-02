import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default function Login() {
  async function handleSubmit(formData: FormData) {
    'use server';

    const apiUrl = process.env.API_URL || 'http://localhost:8000';
    const username = formData.get('username') as string;
    const password = formData.get('password') as string | null;
    const twofa = formData.get('2fa') as string | null;

    const formBody = new URLSearchParams();
    if (username) formBody.append('username', username);
    if (password) formBody.append('password', password);
    if (twofa) formBody.append('2fa', twofa);

    const response = await fetch(`${apiUrl}/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody.toString(),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Login failed:', response.status, errorData);
      return; // early exit on failure
    }

    const data = await response.json();
    const accessToken = data.access_token;

    const cookieStore = await cookies();
    cookieStore.set({
      name: 'accessToken',
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: (60 * 60 * 24) * 5, // 5 days
    });

    redirect('/');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-24">
      <h1 className="text-4xl font-bold">Login Page</h1>
      <form action={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="2fa"
          placeholder="2FA Code"
          className="p-3 border border-gray-300 rounded w-40"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition w-40"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition w-40"
          >
            Login with Passkey
          </button>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition w-40"
          >
            Register
          </button>
          <button
            type="button"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition w-40"
          >
            Forgot Password
          </button>
        </div>
      </form>
    </main>
  );
}
