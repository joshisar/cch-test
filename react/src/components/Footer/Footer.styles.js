import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--medGrey);
  padding: 10px 20px;
  min-height: 300px;
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
  span {
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--white);
  }
`;
