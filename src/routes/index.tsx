import { Switch, Route } from 'react-router-dom';

import { RegisterPage } from '../pages/Register/RegisterPage';
import { HomePage } from '../pages/Home/HomePage';
import { broccoliSaladWithBacon } from '../pages/Posts/posts/broccoli-salad-with-bacon';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterPage} />

        {/* POSTS BLOG */}
        <Route path="/posts/broccoli-salad-with-bacon" component={broccoliSaladWithBacon} />
    </Switch>
);

export default Routes;
