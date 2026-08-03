const labels = [
  {
    name: "Personal",
    color: "bg-yellow-400",
    count: 4,
  },
  {
    name: "Work",
    color: "bg-violet-500",
    count: 5,
  },
  {
    name: "Ideas",
    color: "bg-lime-500",
    count: 3,
  },
  {
    name: "Study",
    color: "bg-pink-500",
    count: 2,
  },
];

const Labels = () => {
  return (
    <section className="mt-4 px-5">
      {/* Header */}
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-xs font-bold tracking-widest text-slate-400">
          LABELS
        </h3>

        <button className="text-xl font-light text-slate-500 transition hover:text-yellow-500">
          +
        </button>
      </div>

      {/* Labels */}
      <div className="space-y-2">
        {labels.map((label) => (
          <button
            key={label.name}
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-xl
              px-3
              py-1
              transition
              hover:bg-slate-50
              dark:hover:bg-slate-800
            "
          >
            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${label.color}`}
              />

              <span className="font-medium text-slate-700 dark:text-slate-200">
                {label.name}
              </span>
            </div>

            <span className="text-s text-slate-500">
              {label.count}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Labels;