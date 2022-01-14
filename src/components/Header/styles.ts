import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 55px;
  width: 100vw;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;

  h1 {
    color: #badc58;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 425px) {
    h1 {
      font-size: 1.2rem;
    }
  }

  button {
    color: #badc58;
    background: transparent;
    border: 0;
    border-radius: 4px;
    font-size: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.5rem 1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
    @media (max-width: 425px) {
      font-size: 0.8rem;
    }
    @media (max-width: 375px) {
      font-size: 0.7rem;
    }
  }
`;
