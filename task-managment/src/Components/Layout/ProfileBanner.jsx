import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"; // Import icons

const ProfileBanner = () => {
  return (
    <>
      <div className="relative inline-block text-left">
        {/* Dropdown toggle button */}
        <input type="checkbox" id="user-menu-toggle" className="hidden peer" />
        <label
          htmlFor="user-menu-toggle"
          className="flex cursor-pointer text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="mx-auto rounded-full h-10 w-10 b-2"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="user photo"
          />
        </label>

        {/* Dropdown menu */}
        <div className="absolute right-0 z-50 hidden peer-checked:block my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-max border border-gray-300"> {/* Added border and shadow here */}
          <ul className="py-2">
            <li>
              <Link
                to="/profileupdate"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" /> {/* Profile icon */}
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/changepassword"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faKey} className="mr-2" /> {/* Change Password icon */}
                Change Password
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> {/* Logout icon */}
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileBanner;
