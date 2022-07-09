import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import { VehicleContext } from "../../contexts/VehicleContext";
import { IVehicle } from "../../types/Vehicle";
import { CloseModalButton } from "../CloseModalButton";
import { SaveButton } from "../SaveButton";
import { Container, ErrorMessage, FormGroup } from "./style";

interface IVehicleModal {
  isOpen: boolean;
  onRequestClose: () => void;
  toUpdateVehicle: boolean;
  vehicle: IVehicle | undefined;
}

export function VehicleModal({
  isOpen,
  onRequestClose,
  toUpdateVehicle,
  vehicle,
}: IVehicleModal) {
  const { createVehicle, updateVehicle } = useContext(VehicleContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IVehicle>();

  const handleSubmitForm = (data: IVehicle) => {
    const { name, brand, price, color, productionYear, plate, description } =
      data;

    // ------ Checking if action update vehicle was clicked
    if (toUpdateVehicle) {
      updateVehicle(
        vehicle?._id as string,
        name,
        brand,
        price,
        color,
        productionYear,
        plate,
        description
      );
    } else {
      createVehicle(
        name,
        brand,
        price,
        color,
        productionYear,
        plate,
        description
      );
    }
    onRequestClose();
  };

  useEffect(() => {
    reset();
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      appElement={document.getElementById("root") || undefined}
    >
      <CloseModalButton onRequestClose={onRequestClose} isSideMenu={false} />
      <Container onSubmit={handleSubmit(handleSubmitForm)}>
        {toUpdateVehicle ? (
          <h2>Atualizar veículo</h2>
        ) : (
          <h2>Cadastrar veículo</h2>
        )}
        <FormGroup>
          <label>Nome:</label>
          <input
            type="text"
            defaultValue={vehicle?.name}
            {...register("name", { required: "Nome é obrigatório." })}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </FormGroup>

        <FormGroup>
          <label>Marca:</label>
          <input
            type="text"
            defaultValue={vehicle?.brand}
            {...register("brand", { required: "Marca é obrigatória." })}
          />
          <ErrorMessage>{errors.brand?.message}</ErrorMessage>
        </FormGroup>

        <FormGroup>
          <label>Preço:</label>
          <input
            type="text"
            defaultValue={vehicle?.price}
            {...register("price", { required: "Preço é obrigatório." })}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </FormGroup>

        <FormGroup>
          <label>Cor:</label>
          <input
            type="text"
            defaultValue={vehicle?.color}
            {...register("color", { required: "Cor é obrigatória." })}
          />
          <ErrorMessage>{errors.color?.message}</ErrorMessage>
        </FormGroup>

        <FormGroup>
          <label>Ano:</label>
          <input
            type="text"
            defaultValue={vehicle?.productionYear}
            {...register("productionYear", { required: "Ano é obrigatório." })}
          />
          <ErrorMessage>{errors.productionYear?.message}</ErrorMessage>
        </FormGroup>

        <FormGroup>
          <label>Placa:</label>
          <input
            type="text"
            defaultValue={vehicle?.plate}
            {...register("plate", { required: "Placa é obrigatória." })}
          />
          <ErrorMessage>{errors.plate?.message}</ErrorMessage>
        </FormGroup>

        <FormGroup>
          <label>Descrição:</label>
          <input
            type="text"
            defaultValue={vehicle?.description}
            {...register("description")}
          />
        </FormGroup>
        <SaveButton onClick={() => {}} />
      </Container>
    </Modal>
  );
}
