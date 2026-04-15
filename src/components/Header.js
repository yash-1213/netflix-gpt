import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/util";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const isGptSearchVisible = useSelector((store) => store.gpt.showGptSearch);

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

  const handleSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center">
          {isGptSearchVisible && (
            <select className="py-2 px-4 rounded-md m-2" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button className="py-2 px-4 m-2 text-white bg-purple-800 rounded-md" onClick={handleSearchClick}>
            {isGptSearchVisible ? "Home Page" : "GPT Search"}
          </button>
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
