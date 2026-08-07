const NoteCardSkeleton = () => {
  return (
    <div
      className="
        animate-pulse

        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5

        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="h-7 w-20 rounded-full bg-slate-200 dark:bg-slate-700" />

        <div className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-700" />
      </div>

      {/* Title */}
      <div className="mb-4 h-6 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />

      {/* Description */}
      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />

        <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-700" />

        <div className="h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between">
        <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-700" />

        <div className="flex gap-3">
          <div className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-700" />

          <div className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-700" />

          <div className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
    </div>
  );
};

export default NoteCardSkeleton;