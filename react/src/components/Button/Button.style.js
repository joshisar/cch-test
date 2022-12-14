import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  background: var(--purpleDark);
  width: 25%;
  min-width: 200px;
  height: 50px;
  border-radius: 10px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 5px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
