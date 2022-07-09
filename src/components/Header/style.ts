import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem 0;
  margin-bottom: 1.5rem;
  background: #866af2;

  @media (max-width: 700px) {
    justify-content: space-between;
    padding: 0.3rem 1.3rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 8rem;
  }
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;

  a {
    padding: 0 1rem;
    color: #fff;
  }
  a:hover {
    color: var(--dark-green);
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;

  p,
  a,
  button,
  span {
    color: #fff;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 1.5rem;
  }
`;

export const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 700px) {
    display: flex;
  }
`;
