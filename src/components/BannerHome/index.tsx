import React from 'react';
import { Container, TextandInputContainer } from './styles';

export function BannerHome() {
    return (
        <Container>
            <TextandInputContainer>
                <h1>
                    Ready for
                    <br />
                    Trying a new
                    <br />
                    recipe?
                </h1>
                <input type="text" placeholder="Search healthy recipes" />
            </TextandInputContainer>
            <img src="/images/Illustration.svg" alt="Github Explorer" />
        </Container>
    );
}
