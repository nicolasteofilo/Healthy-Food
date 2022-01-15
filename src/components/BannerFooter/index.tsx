import React from 'react';
import { Container, TextandInputContainer } from './styles';

export function BannerFooter() {
    return (
        <Container>
            <TextandInputContainer>
                <h1 id="join">Join our membership to get special offer</h1>
                <div>
                    <input type="text" placeholder="Enter your email address" />
                    <button type="button">Join</button>
                </div>
            </TextandInputContainer>
            <img src="/images/bloco_final_image.svg" alt="Github Explorer" />
        </Container>
    );
}
