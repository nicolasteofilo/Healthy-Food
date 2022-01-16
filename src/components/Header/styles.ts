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
    cursor: pointer;
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
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 5;

  #basic-button {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const ButtonRegister = styled.button`
  background: #fff;
  color: #badc58;
  border: 0;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
  height: 44px;
  line-height: 44px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
  @media (max-width: 375px) {
    font-size: 0.7rem;
  }
`;

export const NormalButtonNav = styled.button`
  color: #fff;
  background: transparent;
  text-decoration: none;
  border: 0;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
  height: 44px;
  line-height: 44px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
    font-size: 1rem;
  }
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
  @media (max-width: 375px) {
    font-size: 0.7rem;
  }
`;
