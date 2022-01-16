import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 2rem;

  img {
    width: 20%;
    height: 20%;
  }

  .back  {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    cursor: pointer;
    p {
      margin-left: 0.4rem;
    }
  }
`;

export const Title = styled.h2`
  color: #1d164d;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
    h3 {
        color: #1d164d;
        margin-top: 2rem;
    }
    p {
        line-height: 2;
    }
    img {
        width: 40%;
        height: auto;
        display: flex;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    ul {
      li {
        margin-left: 2rem;
        margin-bottom: 1rem;
      }
    }
`;
