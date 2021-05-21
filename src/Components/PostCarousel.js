import { Carousel } from 'react-bootstrap';
import PostPlayer from './VideoPlayer/PostPlayer.jsx';
import './VideoPlayer/PostPlayer.jsx';
import StringLibrary from '../Libraries/StringLibrary.json';
import { useState } from 'react';

const library = StringLibrary.Dialogues;

const PostCarousel = ({postsList, postIndex}) => {

  const [currentIndex, setCurrentIndex] = useState(postIndex);

  const handleSelect = (selectedIndex, e) => {
    setCurrentIndex(selectedIndex);
  };

  const cleanDataPosts = postsList.filter( post => post.asset.status!=="");
  const postDidCompletePlaying = (endedPostIndex) => {
    const newPostIndex = endedPostIndex + 1;
    const postsMaxIndex = cleanDataPosts.length - 1;
    setCurrentIndex(newPostIndex>postsMaxIndex ? postsMaxIndex : newPostIndex);
  }

  if (cleanDataPosts) {
    return (
      <div className="h-100">
          <Carousel wrap={false} onSelect={handleSelect} activeIndex={currentIndex} interval={null} className="candor-carousel">
            {
              cleanDataPosts.map( (post, index) => {
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
                        <PostPlayer post={post} index={index} currentCarouselIndex={currentIndex} postDidCompletePlaying={postDidCompletePlaying} />
                    }
                    <Carousel.Caption className="d-block d-sm-none">
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
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
