'use client';

export default function Settings() {
  return (
    <main className='mx-auto p-6 mx:p-10 bg-white rounded shadow-md mt-8'>
      <h1 className='text-3xl font-bold mb-6'>Settings</h1>

      {/* Profile Info Section */}
      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-3'>Profile Information</h2>
        <div className='space-y-2'>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> john.doe@example.com
          </p>
          <p>
            <strong>Username:</strong> johndoe123
          </p>
        </div>
      </section>

      {/* Account Settings Section */}
      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-3'>Account Settings</h2>
        <div className='space-y-2'>
          <p>
            <strong>Change Password:</strong> ********
          </p>
          <p>
            <strong>Two-Factor Authentication:</strong> Enabled
          </p>
          <p>
            <strong>Language:</strong> English
          </p>
        </div>
      </section>

      {/* Notifications Section */}
      <section>
        <h2 className='text-xl font-semibold mb-3'>Notifications</h2>
        <div className='space-y-2'>
          <p>
            Email notifications: <span className='font-medium text-green-600'>On</span>
          </p>
          <p>
            Push notifications: <span className='font-medium text-red-600'>Off</span>
          </p>
          <p>
            Newsletter subscription: <span className='font-medium text-green-600'>Subscribed</span>
          </p>
        </div>
      </section>
    </main>
  );
}
