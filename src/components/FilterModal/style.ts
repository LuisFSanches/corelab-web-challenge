import styled from "styled-components";

import DownArrow from "../../assets/images/down-arrow.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0.5rem;

  label {
    font-size: 1.15rem;
    margin-left: 0.4rem;
    margin-bottom: 0.2rem;
  }

  input {
    padding: 0.55rem;
    border-radius: 1rem;
  }

  select {
    padding: 0.55rem;
    border-radius: 1rem;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url(${DownArrow});
    background-repeat: no-repeat, repeat;
    background-position: right 0.7rem top 50%, 0 0;
    background-size: 1.3rem auto, 100%;
  }
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;

  input {
    width: 100%;
  }
`;
