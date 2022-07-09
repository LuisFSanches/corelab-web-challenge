import styled from "styled-components";

interface ICardColorProps {
  color: string;
  isFavorite: boolean;
}

const chooseBackgroundColor = (color: string) => {
  switch (color) {
    case "prata":
      return "#aeacac";

    case "branco":
    case "branca":
      return "#fff";

    case "preto":
    case "preta":
      return "#1e1e1e";

    case "cinza":
      return "#bdbdbd";

    case "vermelho":
    case "vermelha":
      return "#f14e4f";

    case "azul":
      return "#378fc5";

    case "verde":
      return "#49CD70";

    case "amarelo":
    case "amarela":
      return "#fff913";

    case "dourado":
    case "dourada":
      return "#E5B511";

    case "marrom":
      return "#c57447";

    case "bege":
      return "#dcb24a";

    case "roxo":
    case "roxa":
      return "#800080";

    case "rosa":
      return "#f893a5";
    case "laranja":
      return "#e9792e";

    default:
      return "#C3C3C3";
  }
};

const chooseFontColor = (color: string) => {
  switch (color) {
    case "branco":
    case "branca":
      return "#0e221d";

    case "amarelo":
    case "amarela":
      return "#0e221d";
    default:
      return "#fff";
  }
};

export const Container = styled.div<ICardColorProps>`
  height: 11.5rem;
  width: 15rem;
  border-radius: 0.5rem;
  background-color: ${(props) => chooseBackgroundColor(props.color)};
  box-shadow: 0.35rem 0.35rem 0.3rem 0.1rem #9a9a94;

  h3,
  p,
  button {
    color: ${(props) => chooseFontColor(props.color)};
  }
  .favorite-button {
    color: ${(props) =>
      props.isFavorite ? "#ec3012" : chooseFontColor(props.color)};
  }

  @media (max-width: 450px) {
    width: 80%;
  }
`;

export const CardActionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom: 1px solid white;

  button {
    padding: 0.2rem 0.5rem;
    font-size: 1.25rem;
  }
`;

export const CardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  color: var(--white);

  p {
    width: 14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1.2rem; /* fallback */
    max-height: 3rem; /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    padding: 0.2rem 0;
  }
`;
