import React from "react";
import ContactUsForm from "../../common/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center mt-24">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Get in Touch</h1>
        <p className="font-[16px] text-richblack-300">
          We’d love to here for you, Please fill out this form.
        </p>
      </div>
      {/* form */}
      <ContactUsForm />
    </div>
  );
};

export default ContactFormSection;
