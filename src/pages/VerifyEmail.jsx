import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoArrowLeft } from "react-icons/go";
import OtpInput from "react-otp-input";
import { MdOutlineRestore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { signUp, sendOtp } from "../services/operations/authApi";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, signupData } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");
  useEffect(() => {
    // if (!signupData) {
    //   navigate("/signup");
    // }
  }, []);
  const handleSubmit = (e) => {
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;
    e.preventDefault();
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };
  return (
    <div className="text-richblack-5 h-screen flex justify-center p-24">
      <div className="flex flex-col items-center max-w-[508px]">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold">Verify email</h1>
            <p className="mt-3 text-richblack-100 text-xl font-medium">
              A verification code has been sent to you. Enter the code below
            </p>
            <form className="mt-6" onSubmit={handleSubmit}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                className="w-full "
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    placeholder="-"
                    className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50 text-2xl"
                  />
                )}
                containerStyle={{
                  justifyContent: "space-between",
                  gap: "0 6px",
                }}
              />
              <button
                className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
                type="submit"
              >
                Verify email
              </button>
            </form>
            <div className="flex justify-between mt-6">
              <Link to="/login">
                <div className="flex gap-2 justify-center items-center">
                  <GoArrowLeft /> <span>Back to login </span>
                </div>
              </Link>
              <button
                className="flex items-center text-blue-100 gap-x-2"
                onClick={() => dispatch(sendOtp(signupData.email, navigate))}
              >
                <MdOutlineRestore /> {"Resend it"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
