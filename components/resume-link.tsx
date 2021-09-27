export default function ResumeLink() {
  return (
    <div className="absolute right-3 bottom-3">
      <a
        className="flex p-3 rounded bg-gray-900 bg-opacity-50 text-primary hover:text-secondary"
        href="/nroberts-resume.pdf"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Resume
      </a>
    </div>
  );
}
