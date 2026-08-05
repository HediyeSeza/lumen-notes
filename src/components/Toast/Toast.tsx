type ToastProps = {
  show: boolean;
  message: string;
  type?: "success" | "error" | "warning" | "info";
};

const toastStyles = {
  success: {
    icon: "✓",
    iconBg: "bg-emerald-500",
    border: "border-emerald-200 dark:border-emerald-800",
  },
  error: {
    icon: "✕",
    iconBg: "bg-red-500",
    border: "border-red-200 dark:border-red-800",
  },
  warning: {
    icon: "!",
    iconBg: "bg-amber-500",
    border: "border-amber-200 dark:border-amber-800",
  },
  info: {
    icon: "i",
    iconBg: "bg-sky-500",
    border: "border-sky-200 dark:border-sky-800",
  },
};

const Toast = ({
  message,
  show,
  type = "success",
}: ToastProps) => {
  const style = toastStyles[type];

  return (
    <div
  className={`
    fixed
    top-6
    left-1/2
    -translate-x-1/2

    z-[999]

    transition-all
    duration-300
    ease-out

    ${
      show
        ? "translate-y-0 opacity-100"
        : "-translate-y-4 opacity-0 pointer-events-none"
    }
  `}
>
      <div
        className={`
          flex
          min-w-[300px]
          max-w-md
          items-center
          gap-4

          rounded-2xl
          border

          bg-white
          dark:bg-slate-900

          px-5
          py-4

          shadow-xl

          ${style.border}
        `}
      >
        <div
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center

            rounded-full

            text-lg
            font-bold
            text-white

            ${style.iconBg}
          `}
        >
          {style.icon}
        </div>

        <p
          className="
            flex-1
            text-sm
            font-medium
            text-slate-700
            dark:text-slate-100
          "
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default Toast;