import React from "react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const visiblePages = 3; // Number of visible pages at a time

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the range of visible pages based on the current page
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center mt-4">
      {currentPage > 1 && (
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          className="px-3 py-1 mx-1 focus:outline-none bg-gray-200 text-gray-800"
        >
          {"<"}
        </button>
      )}

      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <button
          key={startPage + i}
          onClick={() => handlePageClick(startPage + i)}
          className={`px-3 py-1 mx-1 focus:outline-none ${
            currentPage === startPage + i
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {startPage + i}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          className="px-3 py-1 mx-1 focus:outline-none bg-gray-200 text-gray-800"
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default Pagination;
