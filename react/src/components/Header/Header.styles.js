import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--lightGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 1px 1;
  margin: 0 auto;
  color: var(--white);
  a {
    color: var(--white);
    text-decoration: none;
  }
`;

export const Web3AuthImg = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const SettlemintImg = styled.img`
  width: 300px;
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
