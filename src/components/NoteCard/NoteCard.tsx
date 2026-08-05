import {
  EyeIcon,
  EditIcon,
  DeleteIcon,
  StarIcon,
  StarFilledIcon,
} from "../../assets/icons";

import NoteBadge from "./NoteBadge";

type NoteCardProps = {
  title: string;
  description: string;
  category: "Personal" | "Work" | "Ideas" | "Study";
  time: string;
  favorite: boolean;
  onEdit: () => void;
};

const NoteCard = ({
  title,
  description,
  category,
  time,
  favorite,
  onEdit,
}: NoteCardProps) => {
  return (
    <article
      className="
        flex
        h-full
        flex-col

        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm

        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md

        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <NoteBadge label={category} />

        <button
          className="
            rounded-lg
            p-1
            transition-all
            duration-200
          "
        >
          <img
            src={favorite ? StarFilledIcon : StarIcon}
            alt="Favorite"
            className={`
              h-4
              w-4
              transition-all
              duration-200
              ${
                favorite
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-100 hover:scale-110"
              }
            `}
          />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p
          className="
            mt-2
            line-clamp-3
            text-sm
            leading-6
            text-slate-500
            dark:text-slate-400
          "
        >
          {description}
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-5 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          {time}
        </span>

        <div className="flex items-center gap-3">
          <button className="transition-opacity hover:opacity-70">
            <img
              src={EyeIcon}
              alt="View"
              className="h-5 w-5"
            />
          </button>

          <button
            onClick={onEdit}
            className="transition-opacity hover:opacity-70"
          >
            <img
              src={EditIcon}
              alt="Edit"
              className="h-5 w-5"
            />
          </button>

          <button className="transition-opacity hover:opacity-70">
            <img
              src={DeleteIcon}
              alt="Delete"
              className="h-5 w-5"
            />
          </button>
        </div>
      </footer>
    </article>
  );
};

export default NoteCard;