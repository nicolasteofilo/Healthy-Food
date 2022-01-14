import React from 'react';
import { BannerFooter } from '../../components/BannerFooter';
import { BannerHome } from '../../components/BannerHome';
import { BannerTwo } from '../../components/BannerTwo';
import { BestRecipes } from '../../components/BestRecipes';
import { BlogSection } from '../../components/BlogSection';
import { Header } from '../../components/Header';
import { Container } from './styles';

function HomePage() {
    return (
        <Container>
            <Header />
            <BannerHome />
            <BestRecipes />
            <BannerTwo />
            <BlogSection />
            <BannerFooter />
        </Container>
    );
}

export default HomePage;
