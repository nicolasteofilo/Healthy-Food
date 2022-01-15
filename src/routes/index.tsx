import { Switch, Route } from 'react-router-dom';

import { RegisterPage } from '../pages/Register/RegisterPage';
import { HomePage } from '../pages/Home/HomePage';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterPage} />
    </Switch>
);

export default Routes;
