import styled from "styled-components";

interface IFormGroup {
  isSignUp: boolean;
}

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--gray);
`;

export const SignInContainer = styled.div`
  max-height: 100%;
  height: 42rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  border-radius: 1rem;
  background: var(--main-background);
  box-shadow: 0.2rem 0.25rem 0.25rem 0.1rem #9a9a94;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 12rem;
    margin: 0.5rem 0;
  }
  h2 {
    font-size: 1.7rem;
    font-weight: bold;
    color: var(--dark-purple);
    margin: 1rem;
  }
`;

export const Form = styled.form`
  height: 25rem;
  display: flex;
  flex-direction: column;

  button {
    width: 13rem;
    padding: 0.7rem;
    border-radius: 1rem;
    align-self: center;
    margin: 0.5rem;
    background: var(--dark-purple);
    font-size: 1.3rem;
    color: #fff;
    font-weight: bold;
  }
`;
export const FormGroup = styled.div<IFormGroup>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.isSignUp ? "0.5rem" : "1rem")};

  label {
    margin-left: 0.4rem;
    margin-bottom: 0.4rem;
    align-self: start;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--dark-purple);
  }

  input {
    width: 20rem;
    padding: 0.8rem;
    border: 2px solid var(--dark-purple);
    border-radius: 1rem;
  }
`;
export const ErrorMessage = styled.p`
  font-size: 1.25rem;
  color: red;
  margin-top: 0.8rem;
  align-self: center;
`;

export const SignUpInformationContainer = styled.div`
  width: 100%;
  margin: 1rem;
  text-align: center;

  span {
    font-size: 1.2rem;
    color: var(--dark-purple);
    font-weight: bold;
  }
`;
