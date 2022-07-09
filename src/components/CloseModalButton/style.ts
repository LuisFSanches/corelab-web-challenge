import styled from "styled-components";

interface ICloseButton {
  isSideMenu: boolean;
}

export const CloseButton = styled.button<ICloseButton>`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  font-size: ${(props) => (props.isSideMenu ? "1.5rem" : "1.25rem")};
  background: transparent;
  color: ${(props) => (props.isSideMenu ? "#fff" : "var(--text-body)")};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;
