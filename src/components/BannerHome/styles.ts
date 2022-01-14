import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  img {
    width: 50%;
    height: 50%;
    margin-left: auto;
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`;

export const TextandInputContainer = styled.div`
  margin-left: 3.5rem;
  h1 {
    color: #1d164d;
  }
  input {
    width: 120%;
    height: 3rem;
    border: 0;
    border-radius: 4px;
    padding: 0 1rem;
    margin-top: 2rem;
    border: 1px solid #1d164d;
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
    h1 {
      font-size: 1.5rem;
    }
    input {
      width: 100%;
    }
  }
`;

export const ImageContainer = styled.div``;
