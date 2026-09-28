"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0B0C0E] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
        <h2 className="font-heading font-extrabold text-2xl mb-4 text-amber-400">Global System Error</h2>
        <p className="text-sm text-slate-400 mb-6 max-w-md">An unexpected error occurred at the root level.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 bg-white text-slate-950 font-extrabold rounded-full hover:bg-amber-400 transition-all text-xs"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
