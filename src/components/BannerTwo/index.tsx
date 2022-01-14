import React from 'react';
import { Container, TextandInputContainer } from './styles';

export function BannerTwo() {
    return (
        <Container>
            <img src="/images/bloco_services.svg" alt="Github Explorer" />
            <TextandInputContainer>
                <h1>
                    The best services ready
                    <br />
                    {' '}
                    To serve you
                </h1>
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.
                </p>
                <p>
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                    large language ocean.
                </p>
                <p>
                    A small river named Duden flows by their place and supplies it with the
                    necessary regelialia.
                </p>
                <button type="button">Know More</button>
            </TextandInputContainer>
        </Container>
    );
}
