import React, { useContext, useState } from "react";

import "./PlaceItem.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";

interface PlaceItemProps {
  alt: string | undefined;
  id: string;
  image: string;
  title: string;
  description: string;
  address: string;
  creatorId: string;
  coordinates: { lat: number; lng: number };
}

const PlaceItem: React.FC<PlaceItemProps> = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const openHandler = () => {
    setShowMap(true);
  };
  const closeHandler = () => {
    setShowMap(false);
  };

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("DELETING...");
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeHandler}>Close</Button>}
      >
        <div className="map-container">
          <h2>The Map</h2>
        </div>
      </Modal>

      <Modal
        show={showConfirmModal}
        header="Are you sure?"
        footerClass="place_item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
        onCancel={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        <p>
          Do you want to proceed and delete this place? Pease note that it can't
          be undeone thereafter.{" "}
        </p>
      </Modal>
      <li className="place-item">
        <Card>
          <div className="place-item__image">
            <img src={props.image} alt={props.alt} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={openHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedin && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedin && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
