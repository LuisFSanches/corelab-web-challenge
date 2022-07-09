import { useContext } from "react";

import Card from "../../components/Card";
import { AuthContext } from "../../contexts/AuthContext";
import { VehicleContext } from "../../contexts/VehicleContext";
import { IVehicle } from "../../types/Vehicle";
import { CardsContainer, Container } from "./style";

export function UserVehiclesPage() {
  const { userVehicles } = useContext(VehicleContext);
  const { isAuthenticated, userData } = useContext(AuthContext);

  const checkIfUserHasAdvertisements = () => {
    if (userVehicles.length > 0) {
      return (
        <CardsContainer>
          {userVehicles.map((vehicle: IVehicle) => (
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
    return <h3>Você não possui anúncios</h3>;
  };

  return (
    <Container>
      <h2>Meus Anúncios</h2>
      {checkIfUserHasAdvertisements()}
    </Container>
  );
}
