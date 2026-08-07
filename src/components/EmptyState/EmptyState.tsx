import { NoTextIcon } from "../../assets/icons";

type EmptyStateProps = {
  title: string;
  description: string;
};

const EmptyState = ({
  title,
  description,
}: EmptyStateProps) => {
  return (
    <div
      className="
        mt-12
        flex
        flex-col
        items-center
        justify-center

        rounded-3xl
        border
        border-dashed
        border-slate-300

        bg-white
        py-20

        text-center

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <img
        src={NoTextIcon}
        alt="No Notes"
        className="
          h-20
          w-20

          select-none
        "
      />

      <h2
        className="
          mt-6
          text-2xl
          font-bold

          text-slate-900
          dark:text-white
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-2
          max-w-md

          text-slate-500
          dark:text-slate-400
        "
      >
        {description}
      </p>
    </div>
  );
};

export default EmptyState;