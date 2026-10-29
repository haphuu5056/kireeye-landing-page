export default function Loading() {
  return (
    <main
      id="main"
      className="mx-auto min-h-[70vh] w-full max-w-7xl px-4 py-12 sm:px-6 lg:py-20"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">Loading page...</span>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <div className="h-4 w-40 animate-pulse rounded-full bg-muted" />
          <div className="space-y-3">
            <div className="h-10 w-full max-w-xl animate-pulse rounded-xl bg-muted" />
            <div className="h-10 w-4/5 max-w-lg animate-pulse rounded-xl bg-muted" />
          </div>
          <div className="h-5 w-full max-w-lg animate-pulse rounded-full bg-muted" />
          <div className="h-5 w-3/4 max-w-md animate-pulse rounded-full bg-muted" />
          <div className="flex gap-3 pt-2">
            <div className="h-14 w-48 animate-pulse rounded-2xl bg-muted" />
            <div className="h-14 w-48 animate-pulse rounded-2xl bg-muted" />
          </div>
        </div>
        <div className="h-100 w-full animate-pulse rounded-3xl bg-muted lg:h-137.5" />
      </div>
    </main>
  );
}
