import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.PUBLIC_SERVICE_ID,
        import.meta.env.PUBLIC_TEMPLATE_ID,
        form.current,
        import.meta.env.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <form className="h-full w-full" ref={form} onSubmit={sendEmail}>
      <div
        className="w-full h-4/5 flex flex-col"
        style={{ minHeight: "320px" }}
      >
        {/* Name */}
        <div
          className="h-1/3 w-full ip-box flex justify-start items-center"
          style={{ minHeight: "50px" }}
        >
          <div className="w-24 flex items-center justify-start font-bold text-3xl text-accent flex">
            01
          </div>
          <input
            type="text"
            required
            style={{ minHeight: "48px" }}
            placeholder="Name"
            name="user_name"
            className="w-full h-1/2 text-lightText dark:text-darkText bg-transparent border-b-2 border-gray-300 dark:border-darkUtility focus:outline-none dark:focus:border-darkText focus:border-gray-500 text-2xl font-regular transition duration-200 ease-in-out px-4 pt-1"
          />
        </div>
        {/* Email */}
        <div
          className="h-1/3 w-full ip-box flex justify-start items-center"
          style={{ minHeight: "50px" }}
        >
          <div className="w-24 flex items-center justify-start font-bold text-3xl text-accent flex">
            02
          </div>
          <input
            required
            style={{ minHeight: "48px" }}
            type="email"
            placeholder="Email"
            name="user_email"
            className="w-full h-1/2 text-lightText dark:text-darkText bg-transparent border-b-2 border-gray-300 dark:border-darkUtility focus:outline-none dark:focus:border-darkText focus:border-gray-500 text-2xl font-regular transition duration-200 ease-in-out px-4 pt-1"
          />
        </div>
        {/* Message */}
        <div
          className="h-1/3 w-full ip-box flex justify-start items-center"
          style={{ minHeight: "50px" }}
        >
          <div className="w-24 flex items-center justify-start font-bold text-3xl text-accent flex">
            03
          </div>
          <input
            required
            style={{ minHeight: "48px" }}
            type="text"
            placeholder="Message"
            name="message"
            className="w-full h-1/2 text-lightText dark:text-darkText bg-transparent border-b-2 border-gray-300 dark:border-darkUtility focus:outline-none dark:focus:border-darkText focus:border-gray-500 text-2xl font-regular transition duration-200 ease-in-out px-4 pt-1"
          />
        </div>
      </div>
      <div className="w-full h-2/5">
        <button
          type="submit"
          value="Send"
          className="py-2 px-12 h-18 text-2xl text-lightText dark:text-darkText bg-lightSecondary dark:bg-darkSecondary active-bg-accent dark:active-bg-accent transition duration-400 ease-in-out rounded-sm transform hover:scale-105"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
