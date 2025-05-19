'use client';

import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import Pagination from '../../components/Pagination';
import useFilter from '../../hooks/useFilter';
import { useUsers } from '../../hooks/useUser';
import DataTable from '../../components/DataTable';
import Spinner from '../../components/Spinner';
import DashboardSummary from './DashboardSummary';

export const ITEMS_PER_PAGE = 5;

export default function DashboardPage() {
  const { data: users = [], loading, error } = useUsers();
  const { query, setQuery, filteredData } = useFilter(users, ['name', 'email']);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  if (loading) return <Spinner />;
  if (error) return <p>Error loading users</p>;

  return (
    <main className='p-4 mx-auto'>
      <div>
        <DashboardSummary />
        <SearchBar value={query} onChange={setQuery} />
        <div className='overflow-x-auto max-w-full mt-5'>
          <DataTable data={paginatedData} />
        </div>
      </div>
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
    </main>
  );
}
