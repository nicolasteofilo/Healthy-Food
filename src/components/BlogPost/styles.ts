import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  h1 {
    color: #1d164d;
    font-size: 1.2rem;
    max-width: 90%;
    margin-bottom: 1rem;
    text-align: left;
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.1rem;
    }
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerTextAndButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;
  text-align: left;

  button {
    width: 100px;
    height: 40px;
    border-radius: 6px;
    border: 0;
    background: #badc58;
    color: #fff;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 425px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 55px;
    height: 50px;
    border-radius: 50%;
  }

  p {
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    img {
      width: 43px;
      height: 40px;
    }
    margin-bottom: 1rem;
  }
`;
