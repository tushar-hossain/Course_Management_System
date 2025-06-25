import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  const { setUser, createUser, userProfileUpdate, googleLoggedIn } =
    use(AuthContext);
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handelRegistration = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password, name, photo, confirmPassword } =
      Object.fromEntries(formData.entries());
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (password.length < 8) {
      return toast.error("Password must be 8 characters or more.");
    }

    if (name.length < 3) {
      return toast.error("At least 3 character Name.");
    } else if (photo.length < 1) {
      return toast.error("Must be provide a photo url");
    }

    if (emailRegex.test(email) === false) {
      return toast.error("Invalid email");
    } else if (passwordRegex.test(password) === false) {
      return toast.error(
        "Password must be 1 uppercase, 1 lowercase and 1 digits."
      );
    } else if (password !== confirmPassword) {
      return toast.error("Incorrect Password");
    }

    // create users
    createUser(email, password)
      .then((result) => {
        // update user
        const userObj = { displayName: name, photoURL: photo };
        userProfileUpdate(userObj)
          .then(() => {
            setUser(result.user);
            toast.success("User registration successfully.");
            navigate(location.state || "/");
          })
          .catch(() => {
            toast.error("Please try again");
          });
      })
      .catch(() => toast.error("Please try again"));
  };

  const registerGoogle = () => {
    googleLoggedIn()
      .then((result) => {
        setUser(result.user);
        toast.success("User registration successfully.");
        navigate(location.state || "/");
      })
      .catch(() => toast.error("Please try again"));
  };

  return (
    <div className="py-12">
      <div className="lg:w-2/3 mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl font-bold text-center">Registration Now!</h1>
        <form onSubmit={handelRegistration} className="space-y-6">
          {/* name */}
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          {/* photo */}
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block dark:text-white">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter Photo URL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>

          {/* email */}
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="username"
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
          {/* confirm password */}
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
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-white dark:bg-violet-600 cursor-pointer">
            Register
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-white">
            Registration with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          {/* Google */}
          <button
            onClick={registerGoogle}
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
            Registration with Google
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-white">
          Already have an account?{" "}
          <Link to="/login" className=" underline font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
