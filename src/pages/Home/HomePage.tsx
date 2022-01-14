import React from 'react';
import { BannerHome } from '../../components/BannerHome';
import { BannerTwo } from '../../components/BannerTwo';
import { BestRecipes } from '../../components/BestRecipes';
import { Header } from '../../components/Header';
import { Container } from './styles';

function HomePage() {
    return (
        <Container>
            <Header />
            <BannerHome />
            <BestRecipes />
            <BannerTwo />
        </Container>
    );
}

export default HomePage;
