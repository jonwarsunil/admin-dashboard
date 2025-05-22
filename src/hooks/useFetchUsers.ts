// import { useState, useEffect } from 'react';

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   status: 'Active' | 'Inactive';
// }

// interface UseFetchUsersResult {
//   users: User[];
//   loading: boolean;
//   error: string | null;
//   page: number;
//   totalPages: number;
//   setPage: (page: number) => void;
//   refresh: () => void;
// }

// export default function useFetchUsers(apiUrl: string): UseFetchUsersResult {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   async function fetchUsers(currentPage: number) {
//     debugger;
//     try {
//       setLoading(true);
//       const response = await fetch(`${apiUrl}?page=${currentPage}`);
//       if (!response.ok) throw new Error('Failed to fetch users');
//       console.log('response.ok', response.ok);
//       const data = await response.json();
//       setUsers(data.users);
//       setTotalPages(data.totalPages);
//       setError(null);
//     } catch (err: any) {
//       setError(err.message || 'Unknown error');
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchUsers(page);
//   }, [page]);

//   const refresh = () => fetchUsers(page);

//   return { users, loading, error, page, totalPages, setPage, refresh };
// }
