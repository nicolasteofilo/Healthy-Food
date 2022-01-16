import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #ffff;

  @media (max-width: 768px) {
    flex-direction: column;

    img { 
      width: 80%;
    }
  }
`;
