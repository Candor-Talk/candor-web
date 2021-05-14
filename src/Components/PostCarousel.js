import { Carousel } from 'react-bootstrap';
import PostPlayer from './VideoPlayer/PostPlayer.jsx';
import './VideoPlayer/PostPlayer.jsx';
import StringLibrary from '../Libraries/StringLibrary.json';

const library = StringLibrary.Dialogues;

const PostCarousel = ({postsList}) => {
  if (postsList) {
    return (
      <div style={{height: '100%'}}>
          <Carousel interval={null} className="candor-carousel">
            {
              postsList.filter( post => post.asset.status!=="").map( (post, index) => {
                return (
                  <Carousel.Item key={index} className="candor-carousel">
                    {
                      post.asset.status==="deleted" ?
                        <div >
                          <div className="deleted-post">
                            <h>{library.deletedPost}</h>
                          </div>
                        </div>
                        :
                        <PostPlayer post={post} />
                    }
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </div>
    )
  } else {
    return (
      // TODO: Find a petter way to return this
      <div></div>
    )
  }
}

export default PostCarousel;
