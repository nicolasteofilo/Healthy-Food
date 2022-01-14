import React from 'react';
import { RecipeItem } from '../RecipeItem';
import { Container, GridRecipes, Header } from './styles';
import RecipesMock from '../../mock/recipes.json';

export function BestRecipes() {
    return (
        <Container>
            <Header>
                <h1>Our Best Recipes</h1>
                <p className="fist">Far far away, beheind the word mountains, far from the</p>
                <p className="second">countries Vokalia and Consonantia, there live the blind</p>
            </Header>
            <GridRecipes>
                {RecipesMock.map((recipe) => (
                    <RecipeItem key={recipe.id} name={recipe.name} imgUrl={recipe.imgUrl} />
                ))}
            </GridRecipes>
        </Container>
    );
}
