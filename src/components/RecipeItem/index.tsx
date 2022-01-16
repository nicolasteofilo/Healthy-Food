import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, ContainerTextAndButton } from './styles';

interface RecipeItemProps {
    name: string;
    imgUrl: string;
    path: string;
}

export function RecipeItem({ name, imgUrl, path }: RecipeItemProps) {
    const history = useHistory();

    function handleClick() {
        history.push(`posts/${path}`);
    }

    return (
        <Container>
            <img src={imgUrl} alt={name} />
            <ContainerTextAndButton>
                <h1>{name}</h1>
                <button onClick={handleClick} type="button">See Recipe</button>
            </ContainerTextAndButton>
        </Container>
    );
}
