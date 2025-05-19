'use client';

import { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';
import StatusFilter from '../components/StatusFilter';
import Pagination from '../components/Pagination';
import useFilter from '../hooks/useFilter';
import { useUsers } from '../hooks/useUser';

const ITEMS_PER_PAGE = 5;

export default function User() {
  const { data = [], loading, error } = useUsers();
  const { query, setQuery, statusFilter, setStatusFilter, filteredData } = useFilter(data, ['name', 'email']);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, statusFilter]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  if (loading) return <Spinner />;
  if (error) return <p>Error loading data</p>;

  return (
    <main className='p-4'>
      <div className='flex flex-col md:flex-row justify-between gap-4 mb-5'>
        <SearchBar value={query} onChange={setQuery} />
        <StatusFilter value={statusFilter} onChange={setStatusFilter} />
      </div>
      <div className='overflow-x-auto max-w-full'>
        <DataTable data={paginatedData} />
      </div>
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
    </main>
  );
}
