import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";
import { resetPassword } from "../services/operations/authApi";

const UpdatePassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    const { password, confirmPassword } = formData;
    const token = location.pathname.split("/").at(-1);
    e.preventDefault();
    dispatch(resetPassword(password, confirmPassword, token));
    setFormData({
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div className="text-richblack-5 h-screen flex justify-center p-24">
      <div className="flex flex-col items-center max-w-[508px]">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1 className="text-3xl font-semibold">Choose new password</h1>
            <p className="mt-3 text-richblack-100 text-xl font-medium">
              Almost done. Enter your new password and youre all set.
            </p>
            <form
              className="mt-6 flex flex-col gap-8"
              onSubmit={handleOnSubmit}
            >
              <label className="relative">
                <p className="text-richblack-5">
                  New password<sup className="text-pink-200">*</sup>
                </p>
                <input
                  className="text-richblack-50 mt-2 form-style w-full"
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleOnChange}
                  placeholder="Password"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-[42px] z-[10] cursor-pointer"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>
              <label className="relative">
                <p>
                  Confirm new password<sup className="text-pink-200">*</sup>
                </p>
                <input
                  className="text-richblack-50 mt-2 form-style w-full"
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm Password"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-[42px] z-[10] cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>
              <button
                className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
                type="submit"
              >
                Reset Password
              </button>
            </form>
            <div className="mt-4">
              <Link to="/login">
                <div className="flex gap-2 items-center">
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

export default UpdatePassword;
