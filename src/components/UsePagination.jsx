import React, { useState, useMemo } from 'react';

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = useMemo(() => Math.ceil(data.length / itemsPerPage), [data.length, itemsPerPage]);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  return { currentPage, setCurrentPage, currentData, maxPage };
}

export default usePagination;