export default function Loading() {
  return (
    <div className="animate-fade-in">
      {/* Hero skeleton */}
      <div className="skeleton h-[220px] w-full sm:h-[320px] lg:h-[380px]" />

      {/* Categories skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="skeleton mb-4 h-6 w-40 rounded" />
        <div className="flex gap-4 overflow-hidden">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="flex shrink-0 flex-col items-center gap-2">
              <div className="skeleton h-16 w-16 rounded-2xl sm:h-20 sm:w-20" />
              <div className="skeleton h-3 w-14 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Products skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="skeleton mb-6 h-7 w-48 rounded" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-neutral-100 bg-white">
              <div className="skeleton aspect-square" />
              <div className="space-y-2 p-4">
                <div className="skeleton h-3 w-16 rounded" />
                <div className="skeleton h-4 w-full rounded" />
                <div className="skeleton h-4 w-3/4 rounded" />
                <div className="skeleton h-5 w-20 rounded" />
                <div className="skeleton h-10 w-full rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}