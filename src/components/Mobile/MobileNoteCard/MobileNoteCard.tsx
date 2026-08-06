import { useState } from "react";

import {
  EyeIcon,
  ActiveEyeCloseIcon,
  ActiveEyeIcon,

  EditIcon,
  ActiveEditIcon,

  TrashIcon,
  ActiveTrashIcon,
  ActiveTrashFilledIcon,

  StarIcon,
  ActiveStarIcon,
  ActiveStarFilledIcon,
} from "../../../assets/icons";

type MobileNoteCardProps = {
  title: string;
  description: string;
  category: "Personal" | "Work" | "Ideas" | "Study";
  time: string;
  favorite: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
};

const MobileNoteCard = ({
  title,
  description,
  category,
  time,
  favorite,
  onEdit,
  onDelete,
}: MobileNoteCardProps) => {
  const [hovered, setHovered] = useState<
    "view" | "edit" | "delete" | "favorite" | null
  >(null);

  const [selected, setSelected] = useState<
    "view" | "edit" | "delete" | "favorite" | null
  >(null);

  return (
    <article
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
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
      <div className="flex items-center justify-between">
        <span
          className="
            rounded-full
            bg-yellow-100
            px-3
            py-1
            text-xs
            font-medium
            text-yellow-700

            dark:bg-yellow-900/20
            dark:text-yellow-300
          "
        >
          {category}
        </span>

        <button
          onMouseEnter={() => setHovered("favorite")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => setSelected("favorite")}
          className="transition-all duration-200"
        >
          <img
            src={
              favorite || selected === "favorite"
                ? ActiveStarFilledIcon
                : hovered === "favorite"
                ? ActiveStarIcon
                : StarIcon
            }
            alt="Favorite"
            className="h-5 w-5 transition-all duration-200"
          />
        </button>
      </div>

      {/* Title */}
      <h3
        className="
          mt-4
          text-lg
          font-semibold
          text-slate-900
          dark:text-white
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-2
          line-clamp-2
          text-sm
          leading-6
          text-slate-500
          dark:text-slate-400
        "
      >
        {description}
      </p>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          {time}
        </span>

        <div className="flex items-center gap-3">
          {/* View */}
          <button
            onMouseEnter={() => setHovered("view")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected("view")}
            className="transition-all duration-200"
          >
            <img
              src={
                selected === "view"
                  ? ActiveEyeCloseIcon
                  : hovered === "view"
                  ? ActiveEyeIcon
                  : EyeIcon
              }
              alt="View"
              className="h-5 w-5"
            />
          </button>

          {/* Edit */}
          <button
            onMouseEnter={() => setHovered("edit")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              setSelected("edit");
              onEdit?.();
            }}
            className="transition-all duration-200"
          >
            <img
              src={
                hovered === "edit" ||
                selected === "edit"
                  ? ActiveEditIcon
                  : EditIcon
              }
              alt="Edit"
              className="h-5 w-5"
            />
          </button>

          {/* Delete */}
          <button
            onMouseEnter={() => setHovered("delete")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              setSelected("delete");
              onDelete?.();
            }}
            className="transition-all duration-200"
          >
            <img
              src={
                selected === "delete"
                  ? ActiveTrashFilledIcon
                  : hovered === "delete"
                  ? ActiveTrashIcon
                  : TrashIcon
              }
              alt="Delete"
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default MobileNoteCard;