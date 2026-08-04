type NoteBadgeProps = {
  label: "Personal" | "Work" | "Ideas" | "Study";
};

const badgeColors = {
  Personal: "bg-yellow-100 text-yellow-700",
  Work: "bg-violet-100 text-violet-700",
  Ideas: "bg-lime-100 text-lime-700",
  Study: "bg-pink-100 text-pink-700",
};

const NoteBadge = ({ label }: NoteBadgeProps) => {
  return (
    <span
      className={`
        rounded-full
        px-3
        py-1

        text-xs
        font-medium

        ${badgeColors[label]}
      `}
    >
      {label}
    </span>
  );
};

export default NoteBadge;