import React from 'react';
import { Container, ContainerTextAndButton } from './styles';

interface RecipeItemProps {
    name: string;
    imgUrl: string;
}

export function RecipeItem({ name, imgUrl }: RecipeItemProps) {
    return (
        <Container>
            <img src={imgUrl} alt={name} />
            <ContainerTextAndButton>
                <h1>{name}</h1>
                <button type="button">See Recipe</button>
            </ContainerTextAndButton>
        </Container>
    );
}
