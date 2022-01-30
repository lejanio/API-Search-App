import styled from 'styled-components';

export const StyledSearchBar = styled.input`
  display: flex;
  width: 50%;
  min-width: 12em;
  max-width: 32em;
  padding: 1.25em;
  font-size: 1.25rem;
  border: 0;
  border-radius: 10px;
  outline: none;

  &:focus {
    box-shadow: rgba(253, 145, 145, 249) 1px 1px 16px;
  }`;
