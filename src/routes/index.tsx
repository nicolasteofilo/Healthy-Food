import { Switch, Route } from 'react-router-dom';

import { RegisterPage } from '../pages/Register/RegisterPage';
import { HomePage } from '../pages/Home/HomePage';
import { broccoliSaladWithBacon } from '../pages/Posts/posts/broccoli-salad-with-bacon';
import { ClassicBeefBurgers } from '../pages/Posts/posts/classic-beef-burgers';
import { ClassicPotatoSalad } from '../pages/Posts/posts/classic-potato-salad';
import { CherryCobblerontheGrill } from '../pages/Posts/posts/cherry-cobbler-on-the-grill';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={RegisterPage} />

        {/* POSTS BLOG */}
        <Route path="/posts/broccoli-salad-with-bacon" component={broccoliSaladWithBacon} />
        <Route path="/posts/classic-beef-burgers" component={ClassicBeefBurgers} />
        <Route path="/posts/classic-potato-salad" component={ClassicPotatoSalad} />
        <Route path="/posts/classic-potato-salad" component={ClassicPotatoSalad} />
        <Route path="/posts/cherry-cobbler-on-the-grill" component={CherryCobblerontheGrill} />
    </Switch>
);

export default Routes;
