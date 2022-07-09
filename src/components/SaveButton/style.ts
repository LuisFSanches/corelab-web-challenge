import styled from "styled-components";

export const Button = styled.button`
  width: 8rem;
  align-self: end;
  margin-top: 1rem;
  padding: 0.4rem 0.7rem;
  border-radius: 1rem;
  background: var(--dark-green);
  color: var(--text-body);

  &:hover {
    opacity: 0.7;
  }
`;
