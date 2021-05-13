import { Carousel } from 'react-bootstrap';
import PostPlayer from './VideoPlayer/PostPlayer.jsx';
import './VideoPlayer/PostPlayer.jsx';

const PostCarousel = ({postsList}) => {
    return postsList && (
      <div style={{height: '100%'}}>
          <Carousel interval={null} className="candor-carousel">
            {
              postsList.map( (post, i) => {
                return (
                  <Carousel.Item key={i} className="candor-carousel">
                    <PostPlayer key={i} post={post} />
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </div>
    )
}

export default PostCarousel;
