/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsFillBackspaceFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { Container, Title, Content } from '../styles';

export function ClassicPotatoSalad() {
    const router = useHistory();
    window.scrollTo(0, 0);
    return (
        <>
            <Header />
            <Container>
                <div
                    className="back"
                    onClick={() => {
                        router.push('/');
                    }}
                >
                    <BsFillBackspaceFill />
                    <p>Back to home</p>
                </div>
                <Title>Classic Potato Salad</Title>
                <Content>
                    <p>
                        A classic potato salad is a must have at every picnic and barbecue. And in
                        my opinion, this one is the best. Based off my dad's recipe, it's creamy,
                        tangy, with a little bit of crunch from the crunch. What it's not: too
                        sweet. Which is one of my potato salad pet peeves.
                    </p>
                    <h3>What kind of potatoes are best for potato salad?</h3>
                    <p>
                        Now is not the time to use extra starchy russet potatoes. Those are great
                        for baking and frying, but not so great when boiled. (They'll crumble
                        apart!) For potato salad you need waxy potatoes. They hold their shape
                        better when cooking and they usually have creamier interiors.
                    </p>
                    <h3>Why chop the potatoes before boiling?</h3>
                    <p>
                        They cook faster! Plus, trying to cut hot potatoes can be a dangerous task.
                    </p>
                    <h3>Pickles...really?</h3>
                    <p>
                        Yes. But I promise you: You do not need to like pickles to enjoy this
                        recipe. I speak from the experience of someone who has served this potato
                        salad to many so-called pickle haters. Dill pickles add a subtle but fresh
                        bite to this creamy mayo-based salad, and honestly, people are usually
                        blissfully unaware of their presence. If you prefer a more vinegar-based
                        potato salad, then you'll love our German Potato Salad! If you tried our
                        potato salad let us know in the comments below and don't forget to rate it!
                        {' '}
                    </p>
                    <hr />
                    <h3>INGREDIENTS</h3>
                    <ul>
                        <li>3 lb. yukon gold potatoes, chopped into 1” pieces kosher salt</li>
                        <li>1 1/2 c. mayonnaise</li>
                        <li>1 small red onion, finely chopped</li>
                        <li>1 tbsp. Dijon mustard</li>
                        <li>1 tbsp. lemon juice</li>
                        <li>1/4 c. chopped pickles</li>
                        <li>1/2 tsp. paprika</li>
                        <li>4 hard boiled eggs, chopped</li>
                        <li>1/4 c. finely chopped chives</li>
                        <li>Freshly ground black pepper</li>
                        <li>Butterhead lettuce, for serving</li>
                    </ul>
                    <hr />
                    <h3>INSTRUCTIONS</h3>
                    <br />
                    <p>
                        In a large pot, cover potatoes with water and season generously with salt.
                        Bring water to a boil and cook until potatoes are easily pierced with a
                        knife, 12 to 15 minutes. Drain and let cool slightly.
                    </p>
                    <br />
                    <p>
                        In a large bowl, combine mayonnaise, red onion, Dijon mustard, lemon juice,
                        pickles and paprika. Stir until well combined. Fold in cooked potatoes,
                        eggs, and chives, then season with salt and pepper. Refrigerate until ready
                        to serve.
                    </p>
                    <br />
                    <p>Serve over butterhead lettuce.</p>
                </Content>
            </Container>
            <Footer />
        </>
    );
}
