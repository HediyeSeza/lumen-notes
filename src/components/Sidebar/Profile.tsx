import { ChevronDownIcon } from "../../assets/icons";
import Avatar from "../../assets/1.png";

const user = {
  name: "Hediyeh",
  email: "Sezahedi13@gmail.com",
  avatar: Avatar,
};

const Profile = () => {
  return (
    <div className="mt-3 border-t border-yellow-200 px-5 py-4 dark:border-slate-800">
      <button
        className="
          flex
          w-full
          items-center
          justify-between
          rounded-xl
          p-2
          transition-all
          duration-200
          hover:bg-slate-50
          dark:hover:bg-slate-800
        "
      >
        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="
              h-10
              w-10
              rounded-full
              object-cover
            "
          />

          <div className="text-left leading-tight">
            <h4
              className="
                text-[15px]
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              {user.name}
            </h4>

            <p
              className="
                mt-0.5
                text-xs
                text-slate-500
                dark:text-slate-400
              "
            >
              {user.email}
            </p>
          </div>
        </div>

        <img
          src={ChevronDownIcon}
          alt="More"
          className="h-4 w-4 opacity-70"
        />
      </button>
    </div>
  );
};

export default Profile;