import React from "react";
import { useParams } from "react-router-dom";
import { usePlaces } from "../contexts/DestinationProvider";
import PlaceCard from "../components/PlaceCard";

export default function Countries() {
  const {
    placeData: { continents },
  } = usePlaces();
  const { continentId } = useParams();

  const continent = continents?.find((con) => con.id === Number(continentId));

  return (
    <section className="flex h-[100vh] flex-col items-center gap-8 bg-black/90 p-4 text-white">
      <h1 className="text-2xl font-bold">
        Top countries in {continent.name} for your next holiday
      </h1>
      <div className="flex flex-wrap gap-8">
        {continent?.countries?.map((cont) => (
          <PlaceCard
            navTo={`/continent/${continent.id}/country/${cont.id}`}
            key={cont.id}
            placeName={cont.name}
            imgUrl={cont.image}
          />
        ))}
      </div>
    </section>
  );
}
