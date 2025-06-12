import React from "react";
import { useParams } from "react-router";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imgUrl: "../../../public/img1.jpg",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
    location: {
      lat: 48.85837,
      lng: 2.294481,
    },
    creator: "u1",
  },

  {
    id: "p2",
    title: "Tokyo Tower",
    description:
      "A famous communications and observation tower in Tokyo, inspired by the Eiffel Tower.",
    imgUrl: "../../../public/img2.jpg",
    address: "4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan",
    location: {
      lat: 35.6586,
      lng: 139.7454,
    },
    creator: "u2",
  },
];
const UserPlaces: React.FC = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
