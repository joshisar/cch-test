import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 41%,
    rgba(0, 0, 0, 0.65) 100%
  );
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  a {
    color: var(--purpleLight);
    text-decoration: none;
  }
  span {
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--purpleLight);
  }
`;
