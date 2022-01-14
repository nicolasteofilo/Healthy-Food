import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 1rem;
  margin-top: 2rem;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  background-color: #fafafc;
  align-items: center;
  text-align: center;
`;

export const Header = styled.div`
  width: 100vw;
  h1 {
    color: #1d164d;
  }
  p {
    color: #9e9baf;
    word-wrap: break-word;
    padding: 0 0.5rem;
  }
`;

export const GridRecipes = styled.div`
  display: flex;
  max-width: 1200px;
  height: 5rem;
  margin: 0 auto;
  gap: 1rem 1rem;
  margin-top: 3rem;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
  }
  
`;
