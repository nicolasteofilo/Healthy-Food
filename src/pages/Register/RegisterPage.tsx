// libraries
import React from 'react';
import FormRegister from '../../components/FormRegister';
import { Container } from './styles';

// create login page
export function RegisterPage() {
    return (
        <>
            <Container>
                <img src="/images/boy.gif" alt="" />

                <FormRegister />
            </Container>
        </>
    );
}
