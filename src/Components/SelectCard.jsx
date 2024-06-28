import React from "react";

export default function SelectCard({
  icon,
  title,
  price,
  isSelected,
  handleSelect,
}) {
  return (
    <article
      onClick={handleSelect}
      className={`lg:flex lg:flex-col lg:justify-between lg:w-36 lg:h-40 cursor-pointer flex justify-between items-center px-3 py-4  h-16 rounded-lg ${
        isSelected
          ? "border border-indigo-600 bg-indigo-50"
          : "border border-gray-300 hover:border-indigo-600 duration-150"
      }`}
    >
      <div className="lg:flex-col flex  gap-3">
        <img src={icon} className="w-7" />
        <div className="lg:mt-8">
          <h1 className="font-medium text-marineBlue">{title}</h1>
          <p className="text-coolGray">${price}</p>
        </div>
      </div>
    </article>
  );
}
