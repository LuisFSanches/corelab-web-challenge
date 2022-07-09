import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 68rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 1rem;
  background: var(--main-background);

  h2 {
    margin-bottom: 1rem;
  }

  @media (max-width: 1000px) {
    width: 95%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    margin-left: 1rem;
  }
`;

export const AddButton = styled.button`
  width: 10rem;
  align-self: center;
  margin-top: 1rem;
  padding: 0.5rem 0.7rem;
  border-radius: 1rem;
  background: var(--dark-green);
  color: var(--text-body);

  a {
    color: var(--text-body);
  }
  &:hover {
    opacity: 0.7;
  }
`;

export const FavoritesContainer = styled.div`
  height: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
  place-items: initial;
  margin-bottom: 3rem;
  overflow-y: auto;

  @media (max-width: 1020px) {
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    place-items: center;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

interface IAllVehiclesContainer {
  thereIsFavorite: boolean;
}

export const AllVehiclesContainer = styled.div<IAllVehiclesContainer>`
  height: ${(props) => (props.thereIsFavorite ? "22rem" : "none")};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
  place-items: initial;
  overflow-y: auto;

  @media (max-width: 1020px) {
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    place-items: center;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;
