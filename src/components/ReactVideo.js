import React, {useState} from 'react';
import ReactPlayer from "react-player";

const ReactVideo = () => {

    const [youtubeVideo, setYoutubeVideo] = useState("");
    //
    const [youtubeURL, setYoutubeURL] = useState(
      "https://www.youtube.com/watch?v=Cwz3EGbr0Kg"
    );

    const handleYoutubeChange = (e) => {
      setYoutubeVideo(e.target.value);
    };

    const handleYoutubeSubmit = (e) => {
      e.preventDefault();
      setYoutubeURL(youtubeVideo);
    };


    return (
      <div className="video-wrapper">
        <form className="form-group form" onSubmit={handleYoutubeSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter URL"
            required
            onChange={handleYoutubeChange}
          />
          <button type="submit" className="btn btn-success bt-md">
            UPLOAD
          </button>
        </form>
        <div className="youtube-box">
          <ReactPlayer url={youtubeURL} className="video" controls />
        </div>
      </div>
    );
};

export default ReactVideo;

