import { Carousel } from 'react-bootstrap';
import PostPlayer from './VideoPlayer/PostPlayer.jsx';
import './VideoPlayer/PostPlayer.jsx';

const PostCarousel = (props) => {
  if (props.postsList) {
    return (
      <div style={{height: '100%'}}>
          <Carousel interval={null} className="candor-carousel">
            {
              props.postsList.filter( post => {
                if (post.asset.status=="") {
                  return false
                } else {
                  return true
                }
              }).map( (post, index) => {
                return (
                  <Carousel.Item key={index} className="candor-carousel">
                    {
                      post.asset.status=="deleted" ?
                        <div >
                          <div className="deleted-post">
                            <h>Deleted post</h>
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
