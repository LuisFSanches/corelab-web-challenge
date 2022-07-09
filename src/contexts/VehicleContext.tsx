import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";
import { IVehicle } from "../types/Vehicle";
import { AuthContext } from "./AuthContext";

interface IVehicleContext {
  vehicles: IVehicle[];
  createVehicle: (
    name: string,
    brand: string,
    price: number,
    color: string,
    productionYear: number,
    plate: string,
    description: string
  ) => void;
  deleteVehicle: (id: string) => void;
  updateVehicle: (
    id: string,
    name: string,
    brand: string,
    price: number,
    color: string,
    productionYear: number,
    plate: string,
    description: string
  ) => void;

  favoriteVehicles: IVehicle[];
  selectFavoriteVehicle: (id: string) => void;

  filteredVehicles: IVehicle[];
  setFilteredVehicles: (vehicles: IVehicle[]) => void;

  userVehicles: IVehicle[];
}

interface IVehicleProviderProps {
  children: ReactNode;
}

export const VehicleContext = createContext({} as IVehicleContext);

export function VehicleProvider({ children }: IVehicleProviderProps) {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<IVehicle[]>([]);
  const [favoriteVehicles, setFavoriteVehicles] = useState<IVehicle[]>([]);
  const [userVehicles, setUserVehicles] = useState<IVehicle[]>([]);

  const { isAuthenticated } = useContext(AuthContext);

  const loadVehicles = async () => {
    try {
      const response = await api.get("/vehicle");
      setVehicles(response.data);
      setFilteredVehicles(response.data);
    } catch (err) {
      return err;
    }
  };

  const loadFavoriteVehicles = async () => {
    try {
      const response = await api.get("/vehicle/favorites");
      setFavoriteVehicles(response.data);
    } catch (err) {
      return err;
    }
  };

  const loadUserVehicles = async () => {
    try {
      const response = await api.get("/vehicle/user");
      setUserVehicles(response.data);
    } catch (err) {
      return err;
    }
  };

  const createVehicle = async (
    name: string,
    brand: string,
    price: number,
    color: string,
    productionYear: number,
    plate: string,
    description: string
  ) => {
    try {
      await api.post("/vehicle", {
        name,
        brand,
        price,
        color,
        productionYear,
        plate,
        description,
      });
      loadVehicles();
      loadUserVehicles();
    } catch (err) {
      return err;
    }
  };

  const updateVehicle = async (
    id: string,
    name: string,
    brand: string,
    price: number,
    color: string,
    productionYear: number,
    plate: string,
    description: string
  ) => {
    try {
      await api.put(`/vehicle/${id}`, {
        name,
        brand,
        price,
        color,
        productionYear,
        plate,
        description,
      });
      loadVehicles();
      loadFavoriteVehicles();
      loadUserVehicles();
    } catch (err) {
      return err;
    }
  };

  const deleteVehicle = async (id: string) => {
    try {
      await api.delete(`/vehicle/${id}`);
      loadVehicles();
      loadFavoriteVehicles();
      loadUserVehicles();
    } catch (err) {
      return err;
    }
  };

  const selectFavoriteVehicle = async (id: string) => {
    try {
      await api.patch("/user/favorite", {
        vehicleId: id,
      });
      loadVehicles();
      loadFavoriteVehicles();
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    loadVehicles();
    if (isAuthenticated) {
      loadFavoriteVehicles();
      loadUserVehicles();
    } else {
      setFavoriteVehicles([]);
      setUserVehicles([]);
    }
  }, [isAuthenticated]);

  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        createVehicle,
        deleteVehicle,
        updateVehicle,
        favoriteVehicles,
        selectFavoriteVehicle,
        filteredVehicles,
        setFilteredVehicles,
        userVehicles,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
}
