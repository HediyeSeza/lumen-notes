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
  "view" | "edit" | "delete" | "favorite" | null
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
  onMouseLeave={() => {
    setHovered(null);
    setPressed(null);
  }}
  onMouseDown={() => setPressed("favorite")}
  onMouseUp={() => setPressed(null)}
>
  <img
    src={
      favorite
        ? ActiveStarFilledIcon
        : pressed === "favorite"
        ? ActiveStarFilledIcon
        : hovered === "favorite"
        ? ActiveStarIcon
        : StarIcon
    }
    className="h-5 w-5"
    alt="Favorite"
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

        <div className="flex items-center gap-2">
          <button
  onMouseEnter={() => setHovered("view")}
  onMouseLeave={() => {
    setHovered(null);
    setPressed(null);
  }}
  onMouseDown={() => setPressed("view")}
  onMouseUp={() => setPressed(null)}
>
  <img
    src={
      pressed === "view"
        ? ActiveEyeIcon
        : hovered === "view"
        ? ActiveEyeIcon
        : EyeIcon
    }
    className="h-5 w-5"
    alt="View"
  />
</button>

          <button
  onClick={onEdit}
  onMouseEnter={() => setHovered("edit")}
  onMouseLeave={() => {
    setHovered(null);
    setPressed(null);
  }}
  onMouseDown={() => setPressed("edit")}
  onMouseUp={() => setPressed(null)}
>
  <img
    src={
      pressed === "edit"
        ? ActiveEditIcon
        : hovered === "edit"
        ? ActiveEditIcon
        : EditIcon
    }
    className="h-5 w-5"
    alt="Edit"
  />
</button>

          <button
  onClick={onDelete}
  onMouseEnter={() => setHovered("delete")}
  onMouseLeave={() => {
    setHovered(null);
    setPressed(null);
  }}
  onMouseDown={() => setPressed("delete")}
  onMouseUp={() => setPressed(null)}
>
  <img
    src={
      pressed === "delete"
        ? ActiveTrashFilledIcon
        : hovered === "delete"
        ? ActiveTrashIcon
        : TrashIcon
    }
    className="h-5 w-5"
    alt="Delete"
  />
</button>
        </div>
      </footer>
    </article>
  );
};

export default NoteCard;