import React, { useEffect } from 'react';

const YouTubeBackground = () => {
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
      new window.YT.Player('video-container', {
        height: '100%',
        width: '100%',
        videoId: 'zB8_HbrxUi8', // Replace with your actual video ID
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: 'zB8_HbrxUi8', // Replace with your actual video ID
          mute: 1,
          start: 0,
          end: 99999, // A large number to effectively make the video loop
          iv_load_policy: 3, // Disable video annotations
          modestbranding: 1,
          showinfo: 0,
          fs: 0, // Disable fullscreen button
          autohide: 0, // Do not hide controls
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          'onReady': onPlayerReady,
        },
      });
    };

    const onPlayerReady = (event) => {
      // Set the playback speed (0.5 is half speed, 2 is double speed)
      event.target.setPlaybackRate(0.5);
    };

    loadYouTubeScript();

    // Cleanup function
    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div style={{ position: 'relative' }}>
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
          opacity: 0.7,
        }}
      ></div>
      {/* Other components can be added here if needed */}
    </div>
  );
};

export default YouTubeBackground;
