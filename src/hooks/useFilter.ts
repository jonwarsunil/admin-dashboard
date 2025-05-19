import { useState, useMemo } from 'react';

type StatusFilter = 'All' | 'Active' | 'Pending' | 'Inactive';

export default function useFilter<T extends { status?: string }>(data: T[], searchKeys: (keyof T)[]) {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All');

  const filteredData = useMemo(() => {
    let filtered = data;

    if (statusFilter !== 'All') {
      filtered = filtered.filter(item => item.status === statusFilter);
    }

    if (!query) return filtered;

    const lowerQuery = query.toLowerCase();

    return filtered.filter(item =>
      searchKeys.some(key => {
        const value = String(item[key] ?? '');
        return value.toLowerCase().includes(lowerQuery);
      })
    );
  }, [data, query, statusFilter, searchKeys]);

  return { query, setQuery, statusFilter, setStatusFilter, filteredData };
}
