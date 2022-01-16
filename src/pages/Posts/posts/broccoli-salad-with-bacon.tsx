/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsFillBackspaceFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { Container, Title, Content } from '../styles';

export function broccoliSaladWithBacon() {
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
                <Title>Broccoli Salad with Bacon</Title>
                <Content>
                    <p>
                        Easy broccoli salad recipe with bacon, cranberries, red onion, and a zesty
                        dressing made with mayonnaise, Dijon mustard and apple cider vinegar. Jump
                        to the Broccoli Salad Recipe with Bacon or read on to see our tips for
                        making it.
                    </p>
                    <img
                        src="https://www.inspiredtaste.net/wp-content/uploads/2015/02/Broccoli-Salad-Recipe-1-1200.jpg"
                        alt=""
                    />
                    <p>
                        Crisp raw broccoli is tossed with bacon, dried cranberries, red onion and a
                        zesty dressing made with mayonnaise, Dijon mustard and apple cider vinegar.
                        So simple and outrageously delicious!
                    </p>
                    <p>
                        For another broccoli packed salad, try our broccoli slaw with sunflower
                        seeds and dried fruit.
                    </p>
                    <h3>Making broccoli salad</h3>
                    <p>
                        This recipe started with a faint memory of something my Mom would make when
                        I was a child. Raw broccoli, a lightly sweetened mayo-based dressing, bacon
                        and cheese. I wasn’t the biggest fan of vegetables as a child, but I do
                        remember loving her broccoli salad.
                    </p>
                    <img
                        src="https://www.inspiredtaste.net/wp-content/uploads/2015/02/Broccoli-Salad-Recipe-5-1200.jpg"
                        alt=""
                    />
                    <p>
                        Here’s our version with broccoli, red onion, mayonnaise (instead of a
                        sweetened version, ours is doctored up with zesty mustard), bacon and
                        instead of cheese, we throw in a handful of dried cranberries. Not that
                        cheese would be a bad idea, though!
                    </p>
                    <img
                        src="https://www.inspiredtaste.net/wp-content/uploads/2015/02/Broccoli-Salad-Recipe-3-1200.jpg"
                        alt=""
                    />
                    <p>
                        I love the salty crunch of bacon in this salad. We bake our bacon — it is
                        hands-off, takes around 15 minutes and, if you use a foil-lined pan, is less
                        messy than making it on the stovetop. If you are meat-free, try some salty
                        almonds instead.
                    </p>
                    <h3>Don’t Throw Away Broccoli Stems</h3>
                    <p>
                        When I first started cooking for myself, whenever it came to chopping up
                        broccoli, I’d slam my knife down just below the crown and throw away the
                        stem. Thankfully someone, somewhere down the line set me straight. Broccoli
                        stems are excellent — especially in this salad. We actually save and roast
                        broccoli stems all the time. Take a look at our favorite oven roasted
                        vegetables recipe that includes broccoli stems!
                    </p>
                    <p>
                        The end of the stem — let’s say about half-an-inch from the bottom is
                        probably going to be too hardy and woody. Cut that off and discard, you
                        won’t be needing that for the salad. The rest of the stem is usable.
                        Depending on how hardy the stem is, it might be a good idea to run a
                        vegetable peeler up and down the stem to remove the outer (sometimes tough)
                        layer. Then, chop into small pieces.
                    </p>
                </Content>
            </Container>
            <Footer />
        </>
    );
}
