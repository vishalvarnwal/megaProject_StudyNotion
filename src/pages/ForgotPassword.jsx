import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authApi";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className="text-richblack-5 h-screen flex justify-center p-24">
      <div className="flex flex-col items-center max-w-[508px]">
        {loading ? (
          <div>...Loading</div>
        ) : (
          <div>
            <h1 className="text-3xl font-semibold">
              {!emailSent ? "Reset Your Password" : "Check email"}
            </h1>
            <p className="mt-3 text-richblack-100 text-xl font-medium">
              {!emailSent
                ? `Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery`
                : `We have sent the reset email to ${email}`}
            </p>
            <form className="mt-6" onSubmit={handleOnSubmit}>
              {!emailSent && (
                <label>
                  <p className="text-richblack-5">
                    Email Address <sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    className="text-richblack-50 mt-2 form-style w-full"
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                  />
                </label>
              )}
              <button
                className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-10 font-medium text-richblack-900"
                type="submit"
              >
                {!emailSent ? "Reset Password" : "Resend Email"}
              </button>
            </form>
            <div className="mt-8">
              <Link to="/login">
                <div className="flex gap-x-2 items-center">
                  <GoArrowLeft /> <span>Back to login</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
