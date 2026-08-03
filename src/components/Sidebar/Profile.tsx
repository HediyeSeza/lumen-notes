import ChevronDown from "../../assets/icons/chevron-down.svg";
import Avatar from "../../assets/1.png";

const user = {
  name: "Hediyeh",
  email: "Sezahedi13@gmail.com",
  avatar: Avatar,
};

const Profile = () => {
  return (
    <div className="mt-4 border-t border-yellow-200 p-5 dark:border-slate-800">
      <button
        className="
          flex
          w-full
          items-center
          justify-between
          rounded-2xl
          transition
          hover:bg-slate-50
          dark:hover:bg-slate-800
          p-2
        "
      >
        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="
              h-12
              w-12
              rounded-full
              object-cover
            "
          />

          <div className="text-left">
            <h4 className="font-semibold text-slate-900 dark:text-white">
              {user.name}
            </h4>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              {user.email}
            </p>
          </div>
        </div>

        <img
          src={ChevronDown}
          alt="More"
          className="h-5 w-5"
        />
      </button>
    </div>
  );
};

export default Profile;