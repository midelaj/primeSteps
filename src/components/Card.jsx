import React from "react";

const Card = (props) => {
  return (
    <div className="h-[350px] w-[300px] flex flex-col items-center  border-2 bg-white rounded-lg p-4">
      <div className="text-center">
        <img
          src={props.img}
          className="w-full h-[200px] max-w-[180px] mx-auto"
          alt="Product"
        />
      </div>
      <div className="w-full text-center mt-4">
        <ul className="space-y-1">
          <li className="text-lg font-semibold">{props.name}</li>
          <li className="text-gray-600">{props.subtitle}</li>
          <li className="text-xl font-bold text-green-600">{props.price}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
