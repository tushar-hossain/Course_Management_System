import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { resetPassword } = use(AuthContext);

  const handelForgotPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch(() => {
        toast.error("Please try again.");
      });
  };

  return (
    <div className="py-15">
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-800 dark:text-white">
        <form onSubmit={handelForgotPassword} className="space-y-6">
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
          <button className="block w-full p-3 text-center rounded-sm dark:text-white dark:bg-violet-600 cursor-pointer">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
