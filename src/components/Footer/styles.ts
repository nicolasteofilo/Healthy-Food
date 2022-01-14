import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6rem;
  max-width: 1120px;
  width: 100vw;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    color: #1d164d;
  }

  div {
    display: flex;

    p {
      color: #9f9baf;
    }

    span {
      color: #9f9baf;
      margin-left: 20px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;

    > p {
      margin-bottom: 1rem;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
