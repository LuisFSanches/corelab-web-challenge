import { useContext } from "react";

import Card from "../../components/Card";
import { AuthContext } from "../../contexts/AuthContext";
import { VehicleContext } from "../../contexts/VehicleContext";
import { IVehicle } from "../../types/Vehicle";
import { CardsContainer, Container } from "./style";

export function FavoritesPage() {
  const { favoriteVehicles } = useContext(VehicleContext);
  const { isAuthenticated, userData } = useContext(AuthContext);

  const checkIfUserHasFavorites = () => {
    if (favoriteVehicles.length > 0) {
      return (
        <CardsContainer>
          {favoriteVehicles.map((vehicle: IVehicle) => (
            <Card
              key={vehicle._id}
              vehicle={vehicle}
              isAuthenticated={isAuthenticated}
              userData={userData}
            />
          ))}
        </CardsContainer>
      );
    }
    return <h3>Não há favoritos</h3>;
  };
  return (
    <Container>
      <h2>Meus Favoritos</h2>
      {checkIfUserHasFavorites()}
    </Container>
  );
}
