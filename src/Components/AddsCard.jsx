import React from "react";

export default function AddsCard({
  title,
  comment,
  price,
  isSelected,
  handleSelect,
}) {
  return (
    <article
      onClick={handleSelect}
      className={`lg:h-20  flex h-20 px-4 py-3 gap-4 cursor-pointer items-center rounded-lg ${
        isSelected
          ? "border border-indigo-600 bg-indigo-50"
          : "border border-gray-300 hover:border-indigo-600 duration-150"
      }`}
    >
      <input type="checkbox" checked={isSelected} onChange={handleSelect} />
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-medium text-marineBlue ">{title}</h1>
          <p className="text-gray-500 lg:text-base text-xs">{comment}</p>
        </div>
        <p className={`font-medium ${isSelected ? "text-purplishBlue" : ""}`}>
          +${price}
        </p>
      </div>
    </article>
  );
}
