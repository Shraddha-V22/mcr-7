import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlaceCard({ imgUrl, placeName, navTo }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(navTo)}
      className="relative h-[200px] w-[200px] cursor-pointer overflow-hidden rounded-md"
    >
      <img
        src={imgUrl}
        alt={placeName}
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 grid h-[50px] w-[auto] place-items-center bg-gradient-to-tr from-black/80 via-black/10 to-black/0 p-4">
        <p className="text-white">{placeName}</p>
      </div>
    </div>
  );
}
