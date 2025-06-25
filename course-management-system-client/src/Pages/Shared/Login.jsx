import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { setUser, loginUser, googleLoggedIn, gutHubLoggedIn } =
    use(AuthContext);
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handelLoginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      return toast.error("Invalid email or password");
    }

    // login user
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("User login successful.");
        navigate(location.state || "/");
      })
      .catch(() => {
        toast.error("Login fails");
      });
  };

  const loginGoogle = () => {
    googleLoggedIn()
      .then((result) => {
        setUser(result.user);
        toast.success("User login successful.");
        navigate(location.state || "/");
      })
      .catch(() => toast.error("Login fails"));
  };

  const loginGithub = () => {
    gutHubLoggedIn()
      .then((result) => {
        setUser(result.user);
        toast.success("User login successful.");
        navigate(location.state || "/");
      })
      .catch(() => toast.error("Login fails"));
  };

  return (
    <div className="py-12">
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handelLoginUser} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter E-mail"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          {/* password */}
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-white">
              Password
            </label>
            <div className="relative">
              <input
                type={eye ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <p
                onClick={() => setEye(!eye)}
                className=" absolute text-black top-4 right-4"
              >
                {eye ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>
          </div>
          {/* Confirm Password */}
          <div className="space-y-1 text-sm">
            <label htmlFor="confirmPassword" className="block dark:text-white">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={eye2 ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter Confirm Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <p
                onClick={() => setEye2(!eye2)}
                className=" absolute text-black top-4 right-4"
              >
                {eye2 ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>
            <div className="flex justify-end text-xs dark:text-white">
              <Link to="/forgot-password" className="mt-3">
                {" "}
                Forgot Password?
              </Link>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-white dark:bg-violet-600 cursor-pointer">
            Login
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-white">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          {/* Google */}
          <button
            onClick={loginGoogle}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          {/* GitHub */}
          <button
            onClick={loginGithub}
            className="btn bg-black text-white border-black"
          >
            <svg
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              ></path>
            </svg>
            Login with GitHub
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-white">
          Don't have an account?{" "}
          <Link to="/registration" className=" underline font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
