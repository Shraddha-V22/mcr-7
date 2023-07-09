import React from "react";
import { usePlaces } from "../contexts/DestinationProvider";
import PlaceCard from "../components/PlaceCard";

export default function Home() {
  const {
    placeData: { continents },
  } = usePlaces();
  return (
    <section className="flex h-[100vh] w-[100vw] flex-col items-center gap-8 bg-black/90 p-4 text-white">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Welcome to Trip Advisor</h1>
        <h4 className="text-lg font-semibold">
          Top continents for your next holiday
        </h4>
      </div>
      <div className="flex flex-wrap gap-8">
        {continents?.map((con) => (
          <PlaceCard
            key={con.id}
            navTo={`/continent/${con.id}`}
            imgUrl={con.image}
            placeName={con.name}
          />
        ))}
      </div>
    </section>
  );
}
