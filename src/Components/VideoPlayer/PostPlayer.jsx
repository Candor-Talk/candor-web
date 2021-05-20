import ReactPlayer from 'react-player';
import './post-player.css';


const muxURLPrefix = "https://stream.mux.com/";
const videoFileType = ".m3u8";

const PostPlayer = ({post, index, currentCarouselIndex, postDidCompletePlaying}) => {
  const url = muxURLPrefix + post.asset.playback_ids[0].id + videoFileType;
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={url}
          width='100%'
          height='100%'
          controls={true}
          loop={false}
          playing={currentCarouselIndex===index}
          onEnded={() => postDidCompletePlaying(index)}
        />
      </div>
    )
}

export default PostPlayer;