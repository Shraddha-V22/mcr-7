import React from "react";
import { useParams } from "react-router-dom";
import { usePlaces } from "../contexts/DestinationProvider";
import PlaceCard from "../components/PlaceCard";

export default function Destinations() {
  const {
    placeData: { continents },
  } = usePlaces();
  const { continentId, countryId } = useParams();

  const country = continents
    ?.find(({ id }) => id === Number(continentId))
    .countries?.find(({ id }) => id === Number(countryId));

  return (
    <section className="flex h-[100vh] flex-col items-center gap-8 bg-black/90 p-4 text-white">
      <h1 className="text-2xl font-bold">
        Top countries in {country.name} for your next holiday
      </h1>
      <div className="flex flex-wrap gap-8">
        {country?.destinations?.map((dest) => (
          <PlaceCard
            navTo={`/continent/${continentId}/country/${country.id}/destination/${dest.id}`}
            key={dest.id}
            placeName={dest.name}
            imgUrl={dest.image}
          />
        ))}
      </div>
    </section>
  );
}
