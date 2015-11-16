import React from "react";

export default class VideosComponent extends React.Component {
  render() {
    let youtubeLink = (
      <a href="http://youtube.com/torontojavascript"
        target="_blank"
      >
        YouTube channel
      </a>
    );

    return (
      <div>
        <h1>Videos</h1>

        <p>
          Our videos are on our {youtubeLink}.
        </p>
      </div>
    );
  }
}
