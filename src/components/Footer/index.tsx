import { Container } from './styles';

function Footer() {
    return (
        <Container>
            <p>
                © Copyrights
                {new Date().getFullYear()}
                {' '}
                Stack. All Rights Reserved.
            </p>
            <div>
                <p>Privacy Policy</p>
                <span>Terms and Conditions</span>
            </div>
        </Container>
    );
}

export default Footer;
