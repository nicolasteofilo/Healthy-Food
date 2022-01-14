import React from 'react';
import { BannerHome } from '../../components/BannerHome';
import { BestRecipes } from '../../components/BestRecipes';
import { Header } from '../../components/Header';
import { RecipesArea } from '../../components/RecipesArea';
import { Container } from './styles';

function HomePage() {
    return (
        <Container>
            <Header />
            <BannerHome />
            <BestRecipes />
            <RecipesArea />
        </Container>
    );
}

export default HomePage;
