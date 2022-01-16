/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsFillBackspaceFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { Container, Title, Content } from '../styles';

export function CherryCobblerontheGrill() {
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
                <Title>Cherry Cobbler on the Grill</Title>
                <Content>
                    <p>
                        If you want an easy cherry cobbler recipe that also keeps your kitchen cool,
                        you're in luck! This simple cobbler is made with frozen pitted cherries--so
                        there's no sitting in a stuffy kitchen pitting cherries--and it's baked in a
                        cast-iron skillet right on your grill so you don't have to heat up your
                        oven. Try making this summery dessert for your next camping cookout. The
                        sweet smells of tangy cherry filling and a buttery oat topping will have
                        everyone in the campground asking for a bite.
                    </p>
                    <img
                        src="https://i.pinimg.com/564x/9a/97/52/9a975270b21eec1f9bd3a08d7c602a29.jpg"
                        alt=""
                    />
                    <hr />
                    <h3>INGREDIENTS</h3>
                    <ul>
                        <li>
                            4 cups frozen pitted dark sweet cherries (about 19 oz.), thawed and well
                            drained
                        </li>
                        <li>¼ cup granulated sugar</li>
                        <li>1 tablespoon lemon juice</li>
                        <li>½ cup old-fashioned rolled oats</li>
                        <li>½ cup white whole-wheat flour</li>
                        <li>¼ cup packed light brown sugar</li>
                        <li>¼ teaspoon ground cinnamon</li>
                        <li>¼ cup unsalted butter, softened</li>
                    </ul>
                    <hr />
                    <h3>INSTRUCTIONS</h3>
                    <br />
                    <p>
                        Preheat grill to medium (350-400 degrees F). Coat a 9-inch cast-iron skillet
                        with cooking spray.
                    </p>
                    <br />
                    <p>
                        Combine cherries, granulated sugar and lemon juice in a large bowl; toss
                        well to coat. Transfer to the prepared pan.
                    </p>
                    <br />
                    <p>
                        Combine oats, flour, brown sugar and cinnamon in a medium bowl. Add butter;
                        stir until the mixture is thoroughly combined and holds together loosely.
                    </p>
                    <br />
                    <p>
                        Sprinkle the oat mixture over the cherry mixture. Cover the pan with foil.
                        Grill, with grill lid closed, for 20 minutes. Remove the foil and continue
                        grilling, with the lid closed, until the cobbler is bubbly and golden, about
                        10 more minutes. Remove from grill and let stand for 10 minutes before
                        serving. Serve warm.
                    </p>
                </Content>
            </Container>
            <Footer />
        </>
    );
}
