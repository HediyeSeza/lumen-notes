import { PlusIcon } from "../../assets/icons";

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
    <section className="mt-5 px-5">
      {/* Header */}
      <div className="grid grid-cols-[1fr_32px] items-center mb-3">
        <h3 className="text-xs font-bold tracking-widest text-slate-400">
          LABELS
        </h3>

        <button className="flex justify-center">
          <img
            src={PlusIcon}
            alt="Add Label"
            className="h-3.5 w-3.5"
          />
        </button>
      </div>

      {/* Labels */}
      <div className="space-y-2">
        {labels.map((label) => (
          <button
            key={label.name}
            className="
              grid
              w-full
              grid-cols-[1fr_32px]
              items-center
              rounded-xl
              px-2
              py-2
              transition
              hover:bg-slate-50
              dark:hover:bg-slate-800
            "
          >
            <div className="flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-full ${label.color}`}
              />

              <span className="text-[15px] font-medium text-slate-700 dark:text-slate-200">
                {label.name}
              </span>
            </div>

            <span className="text-center text-sm text-slate-500">
              
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Labels;