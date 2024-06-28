import React from "react";
import icon from "../assets/images/icon-thank-you.svg";
export default function Finish() {
  return (
    <article className=" lg:h-96 p-4 lg:bg-white  lg:m-0 m-5 lg:static  flex flex-col justify-center bg-white items-center absolute top-20 rounded-lg h-96">
      <img src={icon} className="w-16 mb-7" />
      <h1 className="font-bold text-3xl mb-3">Thank you!</h1>
      <p className="text-center text-gray-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </article>
  );
}
