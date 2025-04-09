export default function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh]">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-neutral-200 dark:border-neutral-800"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-t-primary-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary-500 dark:text-primary-400 animate-pulse-light">
            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
            <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
            <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
          </svg>
        </div>
      </div>
      <div className="mt-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-5 py-3 shadow-sm">
        <p className="text-neutral-700 dark:text-neutral-300 font-medium animate-pulse-light">Finding your perfect car...</p>
      </div>
    </div>
  );
}