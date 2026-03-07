"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h2 className="text-2xl font-bold text-black mb-3">Something went wrong</h2>
      <p className="text-gray-500 mb-6 text-sm">An unexpected error occurred. Please try again.</p>
      <button
        onClick={reset}
        className="rounded-md bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-600 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
