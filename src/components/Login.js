import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value, name?.current?.value, isSignInForm);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg" alt="background-image" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute bg-gray-900 opacity-90 flex flex-col w-4/12 mx-auto right-0 left-0 my-40 p-4 text-white rounded-md"
      >
        <div className="text-start p-2 mb-4">
          <p className="font-bold text-3xl mb-2">Enter your info to {isSignInForm ? "Sign In" : "Sign Up"}</p>
          <p className="text-gray-300 text-xl">Or get started with a new account</p>
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
