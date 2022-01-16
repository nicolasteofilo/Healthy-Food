import React from 'react';
import { BiSearch } from 'react-icons/bi';
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
                <div>
                    <input type="text" placeholder="Search healthy recipes" />
                    <button type="button">
                        <BiSearch size={20} color="#FFF" />
                    </button>
                </div>
            </TextandInputContainer>
            <img src="/images/Illustration.svg" alt="Github Explorer" />
        </Container>
    );
}
