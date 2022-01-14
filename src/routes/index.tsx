import { Switch, Route } from 'react-router-dom';

import LoginPage from '../pages/Login/LoginPage';
import HomePage from '../pages/Home/HomePage';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/home" component={HomePage} />
    </Switch>
);

export default Routes;
