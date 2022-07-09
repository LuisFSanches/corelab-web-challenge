import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 68rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 1rem;
  background: var(--main-background);
  overflow-y: auto;

  h2 {
    margin-bottom: 2rem;
  }
  h3 {
    text-align: center;
  }

  @media (max-width: 1000px) {
    width: 95%;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
  place-items: initial;
  margin-bottom: 3rem;

  @media (max-width: 1020px) {
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    place-items: center;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;
