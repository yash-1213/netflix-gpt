import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/util";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value, name?.current?.value, isSignInForm);
    setErrorMessage(message);
    if (!message) {
      // signIn/ signUp Logic
      if (!isSignInForm) {
        signUp();
      } else {
        signIn();
      }
    }
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value, name.current.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode} : ${errorMessage}`);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode} : ${errorMessage}`);
      });
  };

  const updateUser = (user) => {
    updateProfile(user, {
      displayName: name.current.value,
    })
      .then(() => {
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      })
      .catch((error) => {
        setErrorMessage(error?.message);
      });
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="w-screen h-screen object-cover" src={BG_IMG} alt="background-image" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mx-4 absolute bg-gray-900 opacity-90 flex flex-col md:w-4/12 md:mx-auto right-0 left-0 my-40 p-4 text-white rounded-md"
      >
        <div className="text-start p-2 mb-4">
          <p className="text-xl font-bold md:text-3xl mb-2">Enter your info to {isSignInForm ? "Sign In" : "Sign Up"}</p>
          <p className="text-md text-gray-300 md:text-xl">Or get started with a new account</p>
        </div>
        {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 m-2 rounded-md bg-gray-700" />}
        <input ref={email} type="email" placeholder="Email" className="p-4 m-2 rounded-md bg-gray-700 opacity-100" />
        <input ref={password} type="password" placeholder="Password" className="p-4 m-2 rounded-md bg-gray-700" />
        <p className="text-red-600 mx-2 mb-4 text-sm font-medium">{errorMessage}</p>
        <button className="p-4 bg-red-600 m-2 rounded-md hover:bg-red-500" type="submit" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="mt-4 mx-2">
          {!isSignInForm ? "Already a customer?" : "New to Netflix?"}
          <span className="text-blue-500 cursor-pointer mx-1 hover:underline" onClick={toggleSignInForm}>
            {!isSignInForm ? "Sign In" : "Sign Up"}
          </span>
          Now
        </div>
      </form>
    </div>
  );
};

export default Login;
