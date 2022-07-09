import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Filter from "../../assets/images/filter.png";
import { Card } from "../../components/Card";
import { FilterModal } from "../../components/FilterModal";
import SearchBar from "../../components/SearchBar";
import { VehicleModal } from "../../components/VehicleModal";
import { AuthContext } from "../../contexts/AuthContext";
import { VehicleContext } from "../../contexts/VehicleContext";
import { IVehicle } from "../../types/Vehicle";
import {
  AddButton,
  AllVehiclesContainer,
  Container,
  FavoritesContainer,
  HeaderContainer,
  SearchContainer,
} from "./style";

export function VehiclesPage() {
  const { favoriteVehicles, filteredVehicles } = useContext(VehicleContext);
  const { isAuthenticated, userData } = useContext(AuthContext);

  const [isVehicleModalOpen, setVehicleModalOpen] = useState(false);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const [queryVehicle, setQueryVehicle] = useState("");
  const keys = [
    "name",
    "brand",
    "price",
    "color",
    "plate",
    "productionYear",
    "description",
  ];

  // -----Open and close vehicle modal
  const handleOpenVehicleModal = () => {
    setVehicleModalOpen(true);
  };

  const handleCloseVehicleModal = () => {
    setVehicleModalOpen(false);
  };

  // -----Open and close filter modal
  const handleOpenFilterModal = () => {
    setFilterModalOpen(true);
  };

  const handleCloseFilterModal = () => {
    setFilterModalOpen(false);
  };

  // -----Filter vehicles
  const searchVehicles = () => {
    if (queryVehicle !== "") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return filteredVehicles.filter((vehicle: any) =>
        keys.some((key) =>
          vehicle[key]?.toString().toLowerCase().includes(queryVehicle)
        )
      );
    }
    return filteredVehicles;
  };

  // ------Check to see if user is logged
  const handleAddButton = () => {
    if (isAuthenticated) {
      return (
        <AddButton onClick={handleOpenVehicleModal}>
          <FontAwesomeIcon icon={faPlus} /> ADICIONAR
        </AddButton>
      );
    }
    return (
      <AddButton>
        <Link to="/login">
          <FontAwesomeIcon icon={faPlus} /> ADICIONAR
        </Link>
      </AddButton>
    );
  };

  const checkIfUserHasFavorites = () => {
    if (favoriteVehicles.length > 0) {
      return (
        <FavoritesContainer>
          {favoriteVehicles.map((vehicle: IVehicle) => (
            <Card
              key={vehicle._id}
              vehicle={vehicle}
              isAuthenticated={isAuthenticated}
              userData={userData}
            />
          ))}
        </FavoritesContainer>
      );
    }
    return <></>;
  };

  return (
    <Container>
      <HeaderContainer>
        <SearchContainer>
          <SearchBar setValue={setQueryVehicle} />
          <button onClick={handleOpenFilterModal}>
            <img src={Filter} alt="" />
          </button>
        </SearchContainer>

        {handleAddButton()}
      </HeaderContainer>

      <h2>Favoritos</h2>
      {checkIfUserHasFavorites()}
      <h2>Anúncios</h2>
      <AllVehiclesContainer thereIsFavorite={favoriteVehicles.length > 0}>
        {searchVehicles().map((vehicle: IVehicle) => (
          <Card
            key={vehicle._id}
            vehicle={vehicle}
            isAuthenticated={isAuthenticated}
            userData={userData}
          />
        ))}
      </AllVehiclesContainer>

      <VehicleModal
        isOpen={isVehicleModalOpen}
        onRequestClose={handleCloseVehicleModal}
        vehicle={undefined}
        toUpdateVehicle={false}
      />
      <FilterModal
        isOpen={isFilterModalOpen}
        onRequestClose={handleCloseFilterModal}
      />
    </Container>
  );
}
