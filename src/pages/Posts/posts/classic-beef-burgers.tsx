/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsFillBackspaceFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { Container, Title, Content } from '../styles';

export function ClassicBeefBurgers() {
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
                <Title>Classic Beef Burgers</Title>
                <Content>
                    <p>
                        Sink your teeth into a delicious restaurant-style, hamburger recipe made
                        from lean beef. Skip the prepackaged patties and take the extra time to
                        craft up your own, and that little extra effort will be worth it. To make
                        cheeseburgers, about 1 minute before burgers are done, top with sliced
                        cheese; continue cooking until cheese begins to melt.
                    </p>
                    <h3>Ingredients</h3>
                    <ul>
                        <li>1 pound ground lean (7% fat) beef</li>
                        <li>1 large egg</li>
                        <li>½ cup minced onion</li>
                        <li>¼ cup fine dried bread crumbs</li>
                        <li>1 tablespoon Worcestershire</li>
                        <li>1 or 2 cloves garlic, peeled and minced</li>
                        <li>About 1/2 teaspoon salt</li>
                        <li>About 1/4 teaspoon pepper</li>
                        <li>4 hamburger buns (4 in. wide), split</li>
                        <li>About 1/4 cup mayonnaise</li>
                        <li>About 1/4 cup ketchup</li>
                        <li>4 iceberg lettuce leaves, rinsed and crisped</li>
                        <li>1 firm-ripe tomato, cored and thinly sliced</li>
                        <li>4 thin slices red onion</li>
                    </ul>
                    <h3>Directions</h3>
                    <h4>Step 1</h4>
                    <p>
                        In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire,
                        garlic, 1/2 teaspoon salt, and 1/4 teaspoon pepper until well blended.
                        Divide mixture into four equal portions and shape each into a patty about 4
                        inches wide.
                    </p>
                    <h4>Step 2</h4>
                    <p>
                        Lay burgers on an oiled barbecue grill over a solid bed of hot coals or high
                        heat on a gas grill (you can hold your hand at grill level only 2 to 3
                        seconds); close lid on gas grill. Cook burgers, turning once, until browned
                        on both sides and no longer pink inside (cut to test), 7 to 8 minutes total.
                        Remove from grill.
                    </p>
                    <h4>Step 3</h4>
                    <p>
                        Lay buns, cut side down, on grill and cook until lightly toasted, 30 seconds
                        to 1 minute.
                    </p>
                    <h4>Step 4</h4>
                    <p>
                        Spread mayonnaise and ketchup on bun bottoms. Add lettuce, tomato, burger,
                        onion, and salt and pepper to taste. Set bun tops in place.
                    </p>
                </Content>
            </Container>
            <Footer />
        </>
    );
}
