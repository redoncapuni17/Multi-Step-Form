import React from "react";

export default function Personal({
  name,
  setName,
  emailAdress,
  setEmailAdress,
  phoneNumber,
  setPhoneNumber,
  error,
}) {
  return (
    <section className="lg:flex  lg:flex-col lg:mt-9 lg:gap-8 bg-white lg:p-0 p-5 lg:m-0 m-5 lg:static lg:shadow-none absolute top-20 rounded-lg gap-5 shadow-xl ">
      <div>
        <h1 className="text-3xl font-bold text-marineBlue">Personal info</h1>
        <p className="text-coolGray">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label>Name</label>
              {error && !name && (
                <p className="text-red-600 font-semibold">
                  This field is required
                </p>
              )}
            </div>
            <input
              className={`border p-1 rounded-md pl-3 outline-none focus:border-indigo-700 ${
                error && !name && "border-red-500"
              }`}
              placeholder="e.g. Stephen King"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label>Email Address</label>
              {error && !emailAdress && (
                <p className="text-red-600 font-semibold">
                  This field is required
                </p>
              )}
            </div>
            <input
              className={`border p-1 rounded-md pl-3 outline-none focus:border-indigo-700 ${
                error && !emailAdress && "border-red-500"
              }`}
              placeholder="e.g. stephenking@lorem.com"
              value={emailAdress}
              onChange={(e) => setEmailAdress(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label>Phone Number</label>
              {error && !phoneNumber && (
                <p className="text-red-600 font-semibold">
                  This field is required
                </p>
              )}
            </div>
            <input
              className={`border p-1 rounded-md pl-3 outline-none focus:border-indigo-700 ${
                error && !phoneNumber && "border-red-500"
              }`}
              placeholder="e.g. +1 234 567 890"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
