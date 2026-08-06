import { useState } from "react";

import {
  EyeIcon,
  ActiveEyeIcon,

  EditIcon,
  ActiveEditIcon,

  TrashIcon,
  ActiveTrashIcon,
  ActiveTrashFilledIcon,

  StarIcon,
  ActiveStarIcon,
  ActiveStarFilledIcon,
} from "../../assets/icons";

import NoteBadge from "./NoteBadge";

type NoteCardProps = {
  title: string;
  description: string;
  category: "Personal" | "Work" | "Ideas" | "Study";
  time: string;
  favorite: boolean;
  onEdit: () => void;
  onDelete: () => void;
};

const NoteCard = ({
  title,
  description,
  category,
  time,
  favorite,
  onEdit,
  onDelete,
}: NoteCardProps) => {
  const [hovered, setHovered] = useState<
    "view" | "edit" | "delete" | "favorite" | null
  >(null);

  const [pressed, setPressed] = useState<
    "edit" | "delete" | null
  >(null);

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
        hover:border-yellow-400
        hover:shadow-md

        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:border-yellow-400
      "
    >
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <NoteBadge label={category} />

        <button
          onMouseEnter={() => setHovered("favorite")}
          onMouseLeave={() => setHovered(null)}
          className="
            rounded-lg
            p-1
            transition-all
            duration-200
          "
        >
          <img
            src={
              favorite
                ? ActiveStarFilledIcon
                : hovered === "favorite"
                ? ActiveStarIcon
                : StarIcon
            }
            alt="Favorite"
            className="h-4 w-4 transition-all duration-200"
          />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1">
        <h3
          className="
            text-lg
            font-bold
            text-slate-900
            dark:text-white
          "
        >
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
          {/* View */}
          <button
            onMouseEnter={() => setHovered("view")}
            onMouseLeave={() => setHovered(null)}
            className="
              rounded-lg
              p-1
              transition-all
              duration-200
            "
          >
            <img
              src={
                hovered === "view"
                  ? ActiveEyeIcon
                  : EyeIcon
              }
              alt="View"
              className="h-5 w-5 transition-all duration-200"
            />
          </button>

          {/* Edit */}
          <button
            onClick={onEdit}
            onMouseEnter={() => setHovered("edit")}
            onMouseLeave={() => {
              setHovered(null);
              setPressed(null);
            }}
            onMouseDown={() => setPressed("edit")}
            onMouseUp={() => setPressed(null)}
            className="
              rounded-lg
              p-1
              transition-all
              duration-200
            "
          >
            <img
              src={
                pressed === "edit"
                  ? ActiveEditIcon
                  : hovered === "edit"
                  ? ActiveEditIcon
                  : EditIcon
              }
              alt="Edit"
              className="h-5 w-5 transition-all duration-200"
            />
          </button>

          {/* Delete */}
          <button
            onClick={onDelete}
            onMouseEnter={() => setHovered("delete")}
            onMouseLeave={() => {
              setHovered(null);
              setPressed(null);
            }}
            onMouseDown={() => setPressed("delete")}
            onMouseUp={() => setPressed(null)}
            className="
              rounded-lg
              p-1
              transition-all
              duration-200
            "
          >
            <img
              src={
                pressed === "delete"
                  ? ActiveTrashFilledIcon
                  : hovered === "delete"
                  ? ActiveTrashIcon
                  : TrashIcon
              }
              alt="Delete"
              className="h-5 w-5 transition-all duration-200"
            />
          </button>
        </div>
      </footer>
    </article>
  );
};

export default NoteCard;