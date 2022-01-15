import styled from 'styled-components';

export const CardRegister = styled.div`
> h1 {
  font-size: 2rem;
  width: 70%;
  font-weight: bold;
  color: #1d164d;

  span {
    color: #a8dc81;
  }
}
  form {
    display: flex;
    flex-direction: column;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    input {
      background: #fff;
      border: 1px solid #a8dc81;
      border-radius: 4px;
      height: 44px;
      margin-bottom: 10px;
      padding-left: 10px;
    }

    button[type='submit'] {
      background: #a8dc81;
      border: 0;
      border-radius: 4px;
      height: 44px;
      margin-top: 10px;
      padding: 0 15px;
      cursor: pointer;
      color: #FFF;
      font-weight: 700;
    }
  }
`;
