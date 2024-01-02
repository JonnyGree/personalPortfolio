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
      // Autoplay video
      event.target.playVideo();
    };

    const onPlayerStateChange = (event) => {
      // Event triggered when video starts playing
      if (event.data === window.YT.PlayerState.PLAYING && !videoStarted) {
        setVideoStarted(true);
        
        // Set the playback speed after 2 seconds
        setTimeout(() => {
          setPlaybackSpeed(videoId, 0.5);
        }, 2000);
        
        // Hide the loading icon after 4 seconds
        setTimeout(() => {
          setLoadingIconVisible(false);
        }, 4000);
      }
    };

    const setPlaybackSpeed = (videoId, speed) => {
      const player = new window.YT.Player('temp-player', {
        height: 0,
        width: 0,
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          enablejsapi: 1,
          modestbranding: 1,
          origin: window.location.origin,
        },
        events: {
          'onReady': (event) => {
            event.target.setPlaybackRate(speed);
          },
        },
      });
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
      <div id="video-container"></div>
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
      ></div>
      {/* Other components can be added here if needed */}
    </div>
  );
};

export default YouTubeBackground;
