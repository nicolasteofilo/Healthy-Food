/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react';
import { consultarCep } from 'correios-brasil';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { css } from '@emotion/react';
import BarLoader from 'react-spinners/BarLoader';

import { useHistory } from 'react-router-dom';

import { CardRegister, ErrorMessage, Input } from './styles';

interface CepResponse {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
}

type CreateUserFormData = {
    name: string;
    birthDate: any;
    cpf: number;
    cep: number;
    street: string;
    complement: string;
    neighborhood: string;
    state: string;
};

const createUserFormShema = yup.object().shape({
    name: yup.string().required('Required field').min(6, 'Have at least 6 characters'),
    birthDate: yup.string().required('Required field'),
    cpf: yup.string().required('Required field').min(11, 'Have at least 11 characters'),
    cep: yup.string().required('Required field').min(8, 'Have at least 8 characters'),
    street: yup.string().required('Required field'),
    complement: yup.string(),
    neighborhood: yup.string().required('Required field'),
    state: yup.string().required('Required field'),
});

function FormRegister() {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    const router = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(createUserFormShema),
    });

    const [loading, setLoading] = useState(false);
    const [color] = useState('#ffffff');
    const [cep, setCep] = useState('');
    const [informationsCEP, setInformationsCEP] = useState<CepResponse | void>();

    function consultZipCode() {
        consultarCep(cep).then((response) => {
            setInformationsCEP(response);
        });
    }

    useEffect(() => {
        consultZipCode();
    }, [cep]);

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
            setLoading(false);
            router.push('/');
        });
    };

    return (
        <CardRegister>
            <h1>
                Sing up to
                {' '}
                <span>Healthy Food</span>
            </h1>
            {/* @ts-ignore */}
            <form onSubmit={handleSubmit(handleCreateUser)}>
                <Input error={errors?.name?.message} type="text" placeholder="Name" {...register('name')} />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                <Input error={errors?.birthDate?.message} type="date" placeholder="Birth date" {...register('birthDate')} />
                {errors.birthDate && <ErrorMessage>{errors.birthDate.message}</ErrorMessage>}
                <div>
                    <div>
                        <Input error={errors?.cpf?.message} type="number" placeholder="CPF" {...register('cpf')} />
                        {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
                    </div>
                    <div>
                        <Input
                            type="number"
                            error={errors?.cep?.message}
                            placeholder="CEP"
                            {...register('cep')}
                            onChange={(e) => {
                                setCep(e.target.value);
                            }}
                        />
                        {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
                    </div>
                </div>
                {informationsCEP && (
                    <>
                        <div>
                            <Input
                                type="text"
                                placeholder="Street"
                                value={informationsCEP.logradouro}
                                {...register('street')}
                            />
                            <Input
                                type="text"
                                placeholder="Complement"
                                {...register('complement')}
                                defaultValue={informationsCEP.complemento}
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                placeholder="Neighborhood"
                                {...register('neighborhood')}
                                value={informationsCEP.bairro}
                            />
                            <Input
                                type="text"
                                placeholder="State"
                                {...register('state')}
                                value={informationsCEP.uf}
                            />
                        </div>
                    </>
                )}
                <button type="submit">
                    {loading ? (
                        <BarLoader color={color} loading={loading} css={override} />
                    ) : (
                        'Create an account'
                    )}
                </button>
            </form>
        </CardRegister>
    );
}

export default FormRegister;
