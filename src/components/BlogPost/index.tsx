import React from 'react';
import { Container, ContainerTextAndButton, Footer } from './styles';

interface RecipeItemProps {
    name: string;
    imgUrl: string;
    author: string;
    authotImgUrl: string;
}

export function BlogPost({
    name, imgUrl, author, authotImgUrl,
}: RecipeItemProps) {
    return (
        <Container>
            <img src={imgUrl} alt={name} />
            <h1>{name}</h1>
            <Footer>
                <img src={authotImgUrl} alt={author} />
                <p>{author}</p>
            </Footer>
        </Container>
    );
}
