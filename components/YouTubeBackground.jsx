import React, { useEffect, useState } from 'react';

const YouTubeBackground = ({ videoId }) => {
  const [videoStarted, setVideoStarted] = useState(false);
  const [loadingIconVisible, setLoadingIconVisible] = useState(true);

  useEffect(() => {
    const loadYouTubeScript = () => {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
      script.onload = initializeYouTubePlayer;
    };

    const initializeYouTubePlayer = () => {
      window.onYouTubeIframeAPIReady = createYouTubePlayer;
      loadVideoScript();
    };

    const loadVideoScript = () => {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/player_api';
      document.head.appendChild(script);
    };

    const createYouTubePlayer = () => {
      const player = new window.YT.Player('video-container', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: videoId,
          mute: 1,
          start: 0,
          end: 99999,
          iv_load_policy: 3,
          modestbranding: 1,
          showinfo: 0,
          fs: 0,
          autohide: 0,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange,
        },
      });
    };

    const onPlayerReady = (event) => {
      // Play the video
      event.target.playVideo();
    };

    const onPlayerStateChange = (event) => {
      // Event triggered when video starts playing
      if (event.data === window.YT.PlayerState.PLAYING && !videoStarted) {
        // Set the playback speed (0.5 is half speed, 2 is double speed)
        event.target.setPlaybackRate(0.5);

        setVideoStarted(true);

        // Hide the loading icon after 4 seconds
        setTimeout(() => {
          setLoadingIconVisible(false);
        }, 4000);
      }

      // Event triggered when video is about to end
      if (event.data === window.YT.PlayerState.PLAYING && event.target.getDuration() - event.target.getCurrentTime() <= 5) {
        // Stop the video 5 seconds before the end
        event.target.stopVideo();
      }

      // Event triggered when video ends
      if (event.data === window.YT.PlayerState.ENDED) {
        // Restart the video
        event.target.playVideo();
      }
    };

    loadYouTubeScript();

    // Cleanup function
    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, [videoId]); // Dependency on videoId ensures the effect runs when videoId changes

  return (
    <div style={{ position: 'relative' }}>
      {loadingIconVisible && (
        <div
          id="loading-icon"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            color: '#fff',
            fontSize: '2em',
          }}
        >
          Loading...
        </div>
      )}
      <div
        id="video-container"
        style={{
          aspectRatio: '16 / 9', // Set the aspect ratio to 16:9 or adjust as needed
        }}
      ></div>
      <div
        id="video-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#333', // Change this to the color you want for the overlay
          zIndex: 1,
          opacity: loadingIconVisible ? 1 : 0.7,
          transition: 'opacity 4s ease-in-out', // Adjust the duration and easing as needed
        }}
      >
        <h1 className={"rel ff:alt fs:124fx lh:140fx letter:-0.07em m-b:65fx fs:52fx@m lh:56fx@m h:2.2em! shrink:0 $$34$$ align-x:center@m min-h:3.5em@m! h:auto@m! m-b:15fx@m fs:94fx@ml lh:1.12@ml align-x:center"}>
          <span>
            {/* <p>Impossible.<span className={"d:none@m"}>&nbsp;
            </span><span className={"d:none d:inline@m"}>  
          </span><em>
            <strong className={"iblock p-b:0.1em p-x:0.1em fw:400 bg-clip:text c:transparent"} 
                    style={"background-image:radial-gradient(77.35% 538.53% at 16.63% 71.41%, #E37AD5 0%, #6D8ECF 50.05%, #94B6F9 100%)"}>Maybe.
            </strong>
            </em>
            </p> */}
            </span>
            </h1>
      </div>
      {/* Other components can be added here if needed */}
    </div>
  );
};

export default YouTubeBackground;
