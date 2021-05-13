import "bootstrap/dist/css/bootstrap.min.css";
import "./../CandorClasses.css";
import "./../BootstrapCustomizations.css";
import ReactPlayer from "react-player";

const muxURLPrefix = "https://stream.mux.com/";
const videoFileType = ".m3u8";

function PostPlayerPage({ match }) {
  const url = muxURLPrefix + match.params.id + videoFileType;
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
}

export default PostPlayerPage;
