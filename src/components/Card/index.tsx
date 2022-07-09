import { faHeart, faPenToSquare, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { VehicleContext } from "../../contexts/VehicleContext";
import { IVehicle } from "../../types/Vehicle";
import { VehicleModal } from "../VehicleModal";
import { CardActionsContainer, CardBodyContainer, Container } from "./style";

interface ICardProps {
  vehicle: IVehicle;
  isAuthenticated: boolean;
  userData: {
    id: string;
    name: string;
    email: string;
  };
}

export function Card({ vehicle, isAuthenticated, userData }: ICardProps) {
  const { deleteVehicle, selectFavoriteVehicle, favoriteVehicles } =
    useContext(VehicleContext);

  const [isVehicleModalOpen, setVehicleModalOpen] = useState(false);

  // --Open and close vehicle modal
  const handleOpenVehicleModal = () => {
    setVehicleModalOpen(true);
  };

  const handleCloseVehicleModal = () => {
    setVehicleModalOpen(false);
  };

  // --Checking if user is authenticated to load actions on card
  const loadCardActions = () => {
    if (isAuthenticated && userData.id === vehicle.userId) {
      return (
        <>
          <button data-testid="edit-button" onClick={handleOpenVehicleModal}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button
            data-testid="delete-button"
            onClick={() => {
              deleteVehicle(vehicle._id);
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <button
            className="favorite-button"
            onClick={() => selectFavoriteVehicle(vehicle._id)}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </>
      );
    }
    if (isAuthenticated) {
      return (
        <button
          className="favorite-button"
          onClick={() => selectFavoriteVehicle(vehicle._id)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      );
    }
    return (
      <Link to="/login">
        <button className="favorite-button">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </Link>
    );
  };

  // ----Checking favorite vehicles
  const checkFavoriteVehicle = () => {
    if (isAuthenticated && favoriteVehicles !== undefined) {
      const favoriteVehiclesId = favoriteVehicles?.map(
        (vehicle) => vehicle._id
      );
      return favoriteVehiclesId?.includes(vehicle._id);
    }
    return false;
  };

  return (
    <Container
      color={vehicle.color.toLowerCase()}
      isFavorite={checkFavoriteVehicle()}
    >
      <CardActionsContainer>{loadCardActions()}</CardActionsContainer>

      <CardBodyContainer>
        <h3>{vehicle.name}</h3>
        <p>
          Preço:
          {vehicle.price.toLocaleString("br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>
          Descriçao:
          {vehicle.description}
        </p>
        <p>
          Ano:
          {vehicle.productionYear}
        </p>
        <p>
          Cor:
          {vehicle.color}
        </p>
      </CardBodyContainer>

      <VehicleModal
        isOpen={isVehicleModalOpen}
        onRequestClose={handleCloseVehicleModal}
        vehicle={vehicle}
        toUpdateVehicle
      />
    </Container>
  );
}

export default Card;
