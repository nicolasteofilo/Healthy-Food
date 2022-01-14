import React from 'react';
import { Container } from './styles';

interface RecipeItemProps {
    name: string;
    imgUrl: string;
}

function RecipeItem({ name, imgUrl }: RecipeItemProps) {
    return (
        <Container>
            <h1>{name}</h1>
            <img src={imgUrl} alt={name} />
        </Container>
    );
}

export default RecipeItem;
