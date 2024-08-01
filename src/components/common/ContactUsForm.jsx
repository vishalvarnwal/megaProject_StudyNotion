import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiConnectors";
import { contactusEndpoint } from "../../services/apis";
import countryCode from "../../data/countrycode.json";
const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    formState,
  } = useForm();

  useEffect(() => {
    console.log(formState);
    if (isSubmitSuccessful) {
      reset({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const submitContactForm = async (data) => {
    console.log("form submission data", data);
    try {
      setLoading(true);
      const response = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      console.log("logging response ", response);
    } catch (error) {
      console.log("error while logging ", error);
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(submitContactForm)}
      className="flex flex-col gap-5 px-6 mt-10"
    >
      <div className="flex justify-between gap-5">
        {/* firstname */}
        <div className="flex flex-col gap-y-3 w-1/2">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            {...register("firstname", { required: true })}
            className="form-style w-full text-richblack-5"
          />
          {errors.firstname && <span>Please Enter your firstname</span>}
        </div>
        {/* lastname */}
        <div className="flex flex-col gap-y-3 w-1/2">
          <label htmlFor="firstname">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter last name"
            {...register("lastname")}
            className="form-style w-full text-richblack-5"
          />
        </div>
      </div>
      {/* email */}
      <div className="flex flex-col gap-y-3 mt-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          className="form-style w-full text-richblack-5"
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
      </div>
      {/* phone number */}
      <div className="flex flex-col gap-2 mt-2">
        <label htmlFor="phonenumber">Phone Number</label>
        <div className="flex gap-4 text-richblack-5">
          <select
            className="w-[20%] form-style "
            name="dropdown"
            id="dropdown"
            {...register("countrycode", { required: true })}
          >
            {countryCode.map((c_Code, index) => {
              return (
                <option
                  key={index}
                  className="text-black bg-richblack-100"
                  value={c_Code.code}
                >
                  {c_Code.code} - {c_Code.country}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            id="phonenumber"
            name="phonenumber"
            placeholder="12345 67890"
            className="form-style text-richblack-5 w-[80%] no-spinner"
            {...register("phoneNo", {
              required: { value: true, message: "please enter phone number" },
              maxLength: { value: 10, message: "Invalid phone number" },
              minLength: { value: 8, message: "Invalid phone number" },
            })}
          />
        </div>
        {errors.phoneNo && (
          <span className="error-message">{errors.phoneNo.message}</span>
        )}
      </div>
      {/* messagebox */}
      <div className="flex flex-col gap-y-3 mt-2">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={7}
          placeholder="Enter Your Message here"
          {...register("message", { required: true })}
          className="form-style text-richblack-5"
        />
        {errors.message && (
          <span className="error-message">Please enter your message</span>
        )}
      </div>
      <button
        className="w-full text-center text-[13px] px-6 py-3 rounded-md font-bold bg-yellow-50 text-black hover:scale-95 transition-all duration-200"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;
