import React from "react";
import { usePlaces } from "../contexts/DestinationProvider";
import { useParams } from "react-router-dom";

export default function Destination() {
  const {
    placeData: { continents },
  } = usePlaces();
  const { continentId, countryId, destinationId } = useParams();

  const destination = continents
    ?.find(({ id }) => id === Number(continentId))
    ?.countries?.find(({ id }) => id === Number(countryId))
    ?.destinations?.find(({ id }) => id === Number(destinationId));

  const {
    image,
    name,
    description,
    ratings,
    reviews,
    location,
    openingHours,
    ticketPrice,
  } = destination;

  return (
    <section className="flex h-[100vh] w-full flex-col items-center gap-8 bg-black/90 p-4 text-white">
      <h1 className="text-2xl font-bold">{name}</h1>
      <div className="flex gap-4 p-4">
        <img src={image} alt={name} className="w-[200px] rounded-md" />
        <div>
          <p>
            <strong>Description</strong>: {description}
          </p>
          <p>
            <strong>Ratings</strong>: {ratings}
          </p>
          <p>
            <strong>Reviews</strong>: {reviews}
          </p>
          <p>
            <strong>Location</strong>: {location}
          </p>
          <p>
            <strong>Opening</strong> hours: {openingHours}
          </p>
          <p>
            <strong>Ticket</strong> price: {ticketPrice}
          </p>
        </div>
      </div>
    </section>
  );
}
