import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One Of the most famous skyscraper the world',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1694475460083-0840b83cd09c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    address: 'Mumbai, Maharashtra',
    location: {
      lat: 40.21635,
      lng: 70.541,
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Royal Tower',
    description: 'One Of the popular twin tower',
    imageUrl: 'https://images.unsplash.com/photo-1528291151377-165f5107c82a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    address: 'Pune, Maharashtra',
    location: {
      lat: 50.21635,
      lng: -65.541,
    },
    creator: 'u2'
  }
]


const UserPlaces: React.FC = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return (
    <PlaceList items={loadedPlaces} />)
}

export default UserPlaces
