import { Container, GridRecipes, Header } from './styles';
import PostsMock from '../../mock/posts.json';
import { BlogPost } from '../BlogPost';

export function BlogSection() {
    return (
        <Container>
            <Header>
                <h1>Read Our Blog</h1>
                <p className="fist">Far far away, beheind the word mountains, far from the</p>
                <p className="second">countries Vokalia and Consonantia, there live the blind</p>
            </Header>
            <GridRecipes>
                {PostsMock.map((post) => (
                    <BlogPost
                        key={post.id}
                        name={post.name}
                        imgUrl={post.imgUrl}
                        author={post.author}
                        authotImgUrl={post.authotImgUrl}
                    />
                ))}
            </GridRecipes>
        </Container>
    );
}
