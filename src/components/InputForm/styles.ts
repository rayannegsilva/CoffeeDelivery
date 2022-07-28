import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors["base-input"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  padding: 0.75rem;
  font-size: 0.875rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;