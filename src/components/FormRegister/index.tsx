import { CardRegister } from './styles';

function FormRegister() {
    return (
        <CardRegister>
            <h1>
                Sing up to
                {' '}
                <span>Healthy Food</span>
            </h1>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="date" placeholder="Birth date" />
                <div>
                    <input type="number" placeholder="CPF" />
                    <input type="number" placeholder="CEP" />
                </div>
                <button type="submit">Create an account</button>
            </form>
        </CardRegister>
    );
}

export default FormRegister;
