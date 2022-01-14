import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  margin-top: 3rem;

  img {
    width: 50%;
    height: 50%;
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
    width: 65%;
  }

  div {
    margin-top: 1rem;
    display: flex;
  }

  p {
    color: #cccccc;
    width: 90%;
    margin: 1rem 0;
  }

  input {
    height: 3rem;
    border-radius: 6px;
    border: 1px solid #1d164d;
    width: 200px;

    ::placeholder {
      padding: 0.5rem;
    }
  }

  button {
    color: #ffff;
    background: transparent;
    border: 0;
    background: #badc58;
    border-radius: 4px;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    height: 3rem;
    margin-left: 1rem;

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

  @media (max-width: 768px) {
    margin-left: 1rem;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const ImageContainer = styled.div``;
