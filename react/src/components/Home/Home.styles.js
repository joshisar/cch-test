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
`;

export const Text = styled.div`
  z-index: 100;
  color: var(--darkGrey);
  h1 {
    font-size: var(--fontSuperBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  p {
    font-size: var(--fontMed);
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }
  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
