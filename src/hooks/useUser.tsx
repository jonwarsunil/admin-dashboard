// src/hooks/useUsers.ts
import { useEffect, useState } from 'react';
import type { User } from '../types/user';

const statuses = ['Active', 'Inactive', 'Pending'] as const;

export function useUsers() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network response was not ok');

        const users = await response.json();

        const formatted = users.map((user: User) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          website: user.website,
          address: `${user.address.city}`,
          status: statuses[Math.floor(Math.random() * statuses.length)],
        }));

        setData(formatted);
      } catch (err) {
        setError(`Failed to fetch users: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { data, loading, error };
}
