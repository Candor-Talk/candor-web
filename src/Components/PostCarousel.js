import { Carousel } from "react-bootstrap";
import PostPlayer from "./VideoPlayer/PostPlayer.jsx";
import "./VideoPlayer/PostPlayer.jsx";
import StringLibrary from "../Libraries/StringLibrary.json";
import { useState } from "react";
import ProfilePicture from "./ProfilePicture.js";

const library = StringLibrary.Dialogues;

const PostCarousel = ({ postsList, postIndex, dialogueMetaData }) => {
  const [currentIndex, setCurrentIndex] = useState(postIndex);

  const handleSelect = (selectedIndex, e) => {
    setCurrentIndex(selectedIndex);
  };

  const cleanDataPosts = postsList
    ? postsList.filter(post => post.asset.status !== "")
    : [];
  const postDidCompletePlaying = endedPostIndex => {
    const newPostIndex = endedPostIndex + 1;
    const postsMaxIndex = cleanDataPosts.length - 1;
    setCurrentIndex(
      newPostIndex > postsMaxIndex ? postsMaxIndex : newPostIndex
    );
  };

  if (cleanDataPosts) {
    return (
      <div className="h-100">
        <Carousel
          wrap={false}
          onSelect={handleSelect}
          activeIndex={currentIndex}
          interval={null}
          className="candor-carousel"
        >
          {cleanDataPosts.map((post, index) => {
            return (
              <Carousel.Item key={index} className="candor-carousel">
                {post.asset.status === "deleted" ? (
                  <div>
                    <div className="deleted-post">
                      <h>{library.deletedPost}</h>
                    </div>
                  </div>
                ) : (
                  <PostPlayer
                    post={post}
                    index={index}
                    currentCarouselIndex={currentIndex}
                    postDidCompletePlaying={postDidCompletePlaying}
                  />
                )}
                {dialogueMetaData && (
                  <Carousel.Caption className="d-block d-sm-none">
                    <div className="ml-3">
                      <span className="candor-bold">
                        <ProfilePicture
                          photoUrl={dialogueMetaData.poster.photoUrl}
                        />{" "}
                        &nbsp; {dialogueMetaData.poster.displayName} /{" "}
                        {dialogueMetaData.partner.displayName} &nbsp;{" "}
                        <ProfilePicture
                          photoUrl={dialogueMetaData.partner.photoUrl}
                        />
                      </span>
                      <p className="h2">{dialogueMetaData.caption}</p>
                      <p className="font-weight-light">
                        {dialogueMetaData.numberOfPosts} responses
                      </p>
                    </div>
                  </Carousel.Caption>
                )}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  } else {
    return (
      // TODO: Find a petter way to return this
      <div></div>
    );
  }
};

export default PostCarousel;
