import styled from 'styled-components';

interface BorderError {
  error?: string;
}

export const CardRegister = styled.div`
  > h1 {
    font-size: 2rem;
    width: 70%;
    font-weight: bold;
    color: #1d164d;

    span {
      color: #a8dc81;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
      }
    }

    button[type='submit'] {
      background: #a8dc81;
      border: 0;
      border-radius: 4px;
      height: 44px;
      margin-top: 10px;
      padding: 0 15px;
      cursor: pointer;
      color: #fff;
      font-weight: 700;
    }

    transition: filter 0.2s;

    button[type='submit']:hover {
      filter: brightness(90%);
    }

    @media (max-width: 768px) {
      div {
        flex-direction: column;
      }
    }
  }
`;

export const ErrorMessage = styled.span`
  color: #e78483;
  margin-top: -7px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

export const Input = styled.input<BorderError>`
  background: #fff;
  border: 1px solid;
  border-color: ${(props) => (props.error ? '#e78483' : '#a8dc81')};
  border-radius: 4px;
  height: 44px;
  margin-bottom: 10px;
  padding-left: 10px;
`;
