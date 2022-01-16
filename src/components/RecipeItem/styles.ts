import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #ffffff;

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
        img {
            width: 70%;
            height: 70%;
        }
    }
`;

export const ContainerTextAndButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3rem;
    text-align: left;

    h1 { 
        color: #1d164d;
        font-size: 1.5rem;
        max-width: 70%;
        margin-bottom: 1rem;
    }

    button {
        width: 100px;
        height: 40px;
        border-radius: 6px;
        border: 0;
        background: #badc58;
        color: #FFF;
        justify-content: flex-start;
        cursor: pointer;
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
