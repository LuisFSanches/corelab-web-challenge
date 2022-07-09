import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";

import { VehicleContext } from "../../contexts/VehicleContext";
import { IVehicle } from "../../types/Vehicle";
import { CloseModalButton } from "../CloseModalButton";
import { SaveButton } from "../SaveButton";
import { Container, FormGroup, FormRow } from "./style";

interface IFilterModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function FilterModal({ isOpen, onRequestClose }: IFilterModal) {
  const { vehicles, setFilteredVehicles } = useContext(VehicleContext);

  const [localFilteredVehicles, setLocalFilteredVehicles] = useState<
    IVehicle[]
  >([]);

  const [brands, setBrands] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [productionYears, setProductionYears] = useState<number[]>([]);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedProductionYear, setSelectedProductionYear] = useState("");
  const [minimumPrice, setMinimumPrice] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");

  // ------Filling selection options
  const loadBrands = () => {
    const listOfBrands = [];
    for (let i = 0; i < vehicles.length; i++) {
      if (listOfBrands.includes(vehicles[i].brand) === false) {
        listOfBrands.push(vehicles[i].brand);
      }
    }
    setBrands(listOfBrands);
  };

  const loadColors = () => {
    const listOfColors = [];
    for (let i = 0; i < vehicles.length; i++) {
      if (listOfColors.includes(vehicles[i].color) === false) {
        listOfColors.push(vehicles[i].color);
      }
    }
    setColors(listOfColors);
  };

  const loadProductionYears = () => {
    const listOfProductionYears = [];
    for (let i = 0; i < vehicles.length; i++) {
      if (
        listOfProductionYears.includes(vehicles[i].productionYear) === false
      ) {
        listOfProductionYears.push(vehicles[i].productionYear);
      }
    }
    setProductionYears(listOfProductionYears);
  };

  // -------Filtering options
  const filterByBrand = (array: IVehicle[]) => {
    if (selectedBrand !== "") {
      return array.filter((vehicle) => vehicle.brand === selectedBrand);
    }
    return array;
  };

  const filterByColor = (array: IVehicle[]) => {
    if (selectedColor !== "") {
      return array.filter((vehicle) => vehicle.color === selectedColor);
    }
    return array;
  };

  const filterByProductionYear = (array: IVehicle[]) => {
    if (selectedProductionYear !== "") {
      return array.filter(
        (vehicle) =>
          vehicle.productionYear.toString() === selectedProductionYear
      );
    }
    return array;
  };

  const filterByPrice = (array: IVehicle[]) => {
    if (minimumPrice !== "" && maximumPrice === "") {
      return array.filter(
        (vehicle) => vehicle.price >= parseFloat(minimumPrice)
      );
    }
    if (maximumPrice !== "" && minimumPrice === "") {
      return array.filter(
        (vehicle) => vehicle.price <= parseFloat(maximumPrice)
      );
    }
    if (minimumPrice !== "" && maximumPrice !== "") {
      return array.filter(
        (vehicle) =>
          vehicle.price >= parseFloat(minimumPrice) &&
          vehicle.price <= parseFloat(maximumPrice)
      );
    }
    return array;
  };

  // -------Saving filters  onClick
  function saveFilters() {
    setFilteredVehicles(localFilteredVehicles);
    onRequestClose();
  }

  useEffect(() => {
    loadBrands();
    loadColors();
    loadProductionYears();
  }, [isOpen === true]);

  useEffect(() => {
    let result = vehicles;
    result = filterByBrand(result);
    result = filterByColor(result);
    result = filterByProductionYear(result);
    result = filterByPrice(result);
    setLocalFilteredVehicles(result);
  }, [
    selectedBrand,
    selectedColor,
    selectedProductionYear,
    minimumPrice,
    maximumPrice,
  ]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      appElement={document.getElementById("root") || undefined}
    >
      <CloseModalButton onRequestClose={onRequestClose} isSideMenu={false} />
      <Container>
        <FormGroup>
          <label>Marca:</label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="" />
            {brands.map((brand, index) => (
              <option key={`${brand}${index}`} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </FormGroup>

        <FormGroup>
          <label>Cor:</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="" />
            {colors.map((color, index) => (
              <option key={`${color}${index}`} value={color}>
                {color}
              </option>
            ))}
          </select>
        </FormGroup>

        <FormGroup>
          <label>Ano:</label>
          <select
            value={selectedProductionYear}
            onChange={(e) => setSelectedProductionYear(e.target.value)}
          >
            <option value="" />
            {productionYears.map((productionYear, index) => (
              <option key={`${productionYear}${index}`} value={productionYear}>
                {productionYear}
              </option>
            ))}
          </select>
        </FormGroup>

        <FormRow>
          <FormGroup>
            <label>Preço min:</label>
            <input
              value={minimumPrice}
              type="text"
              onChange={(e) => {
                setMinimumPrice(e.target.value);
              }}
            />
          </FormGroup>

          <FormGroup>
            <label>Preço max:</label>
            <input
              value={maximumPrice}
              type="text"
              onChange={(e) => {
                setMaximumPrice(e.target.value);
              }}
            />
          </FormGroup>
        </FormRow>
        <SaveButton
          onClick={() => {
            saveFilters();
          }}
        />
      </Container>
    </Modal>
  );
}
