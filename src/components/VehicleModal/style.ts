import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }
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
`;
export const ErrorMessage = styled.p`
  font-size: 0.9rem;
  color: red;
  margin-top: 0.3rem;
`;
