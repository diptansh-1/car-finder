'use client';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // If total pages is less than max pages to show, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);

      // Calculate start and end of page range
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if at the beginning or end
      if (currentPage <= 2) {
        end = 4;
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 3;
      }

      // Add ellipsis if needed before the range
      if (start > 2) {
        pageNumbers.push('...');
      }

      // Add the range of pages
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis if needed after the range
      if (end < totalPages - 1) {
        pageNumbers.push('...');
      }

      // Always include last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  if (totalPages <= 1) return null;

  return (
    <nav className="flex justify-center mt-10 mb-6 animate-fade-in" aria-label="Pagination">
      <div className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 p-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
        {/* Previous button */}
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center w-10 h-10 rounded-lg ${currentPage === 1
            ? 'text-neutral-400 dark:text-neutral-600 cursor-not-allowed'
            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300'}`}
          aria-label="Previous"
        >
          <span className="sr-only">Previous</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Page numbers */}
        {pageNumbers.map((page, index) => (
          <div key={index}>
            {page === '...' ? (
              <span className="flex items-center justify-center w-10 h-10 text-neutral-500 dark:text-neutral-400">
                ···
              </span>
            ) : (
              <button
                onClick={() => typeof page === 'number' && onPageChange(page)}
                className={`flex items-center justify-center w-10 h-10 rounded-lg font-medium transition-all duration-300 ${currentPage === page
                  ? 'text-white bg-primary-500 shadow-sm hover:bg-primary-600'
                  : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400'}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            )}
          </div>
        ))}

        {/* Next button */}
        <button
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center w-10 h-10 rounded-lg ${currentPage === totalPages
            ? 'text-neutral-400 dark:text-neutral-600 cursor-not-allowed'
            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300'}`}
          aria-label="Next"
        >
          <span className="sr-only">Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </nav>
  );
}