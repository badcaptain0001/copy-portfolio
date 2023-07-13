/* eslint-disable @next/next/no-img-element */
import React from "react";

const WorkCard = ({ img, name, description, onClick, type }) => {
  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
      {type === "email" ? (
        <div
          className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
          style={{ height: "3000px" }}
        >
          <img
            alt={name}
            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
            src={img}
          ></img>
        </div>
      ) : type === "banner" ? (
        <div
          className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
          style={{ height: "600px",width:"100%" }}
        >
          <img
            alt={name}
            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
            src={img}
          ></img>
        </div>
      ) : (
        <div
          className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
          style={{ height: "600px" }}
        >
          <img
            alt={name}
            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
            src={img}
          ></img>
        </div>
      )}
      <h1 className="mt-5 text-3xl font-medium">{name ? name : ""}</h1>
      <h2 className="text-xl opacity-50">{description ? description : ""}</h2>
    </div>
  );
};

export default WorkCard;
