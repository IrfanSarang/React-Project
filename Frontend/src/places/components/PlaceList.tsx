import React from 'react';
import './PlaceList.css';
import Card from '../../shared/components/UIElement/Card';
import PlaceItem from './PlaceItem';

interface Place {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    address: string;
    location: {
      lat: number;
      lng: number;
    };
    creator: string;
  }
  

interface PlaceListProps {
    items: Place[];
}

const PlaceList: React.FC<PlaceListProps> = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>No places found. Maybe create one?</h2>
                    <button>Share Place</button>
                </Card>
            </div>
        );
    }

    return (
        <ul className="place-list">
            {props.items.map((place) => (
                <PlaceItem
                    key={place.id}
                    id={place.id}
                    image={place.imageUrl}
                    title={place.title}
                    description={place.description}
                    address={place.address}
                    creator={place.creator}
                    coordinates={place.location}
                />
            ))}
        </ul>
    );
};

export default PlaceList;
