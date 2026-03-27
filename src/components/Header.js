import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { LOGO, USER_ICON } from "../utils/util";

const Header = () => {
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("error page");
      });
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center">
          <span className="font-bold text-white text-2xl">Welcome! {user?.displayName?.toUpperCase()}</span>
          <img className="w-10 h-10 mx-2 rounded-sm" src={USER_ICON} alt="user icon" />
          <button className="font-bold text-white border p-2 rounded-md bg-slate-400 hover:bg-slate-500" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
