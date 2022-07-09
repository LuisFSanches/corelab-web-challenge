import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  span,
  button {
    font-size: 1.3rem;
    padding: 2.5rem 0;
    color: #fff;
  }
  a {
    font-size: 1.3rem;
    color: #fff;
    padding: 1rem;
  }
`;
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  span {
    font-size: 1.6rem;
    padding: 1rem;
  }
  p {
    font-size: 1.2rem;
    color: #fff;
  }
`;
