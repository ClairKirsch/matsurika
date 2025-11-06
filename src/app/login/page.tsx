import { redirect } from 'next/navigation';

export default function Login() {
  async function handleSubmit(formData: FormData) {
    'use server';

    const username = formData.get('username');
    const password = formData.get('password');
    const twofa = formData.get('2fa');

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('2FA Code:', twofa);

    if (username === 'admin' && password === '1234') {
      redirect('/');
    } else {
      console.log('Invalid login');
    }

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
