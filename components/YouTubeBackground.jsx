import React, { useEffect, useState } from 'react';
// import rotatingImage from './assets/react.svg'; 
import rotatingImage from './assets/logo_8_noBck.svg'; 
import './YouTubeBackground.css'; // Create a separate CSS file for styling

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
      let intervalId;
    
      // Event triggered when video starts playing
      if (event.data === window.YT.PlayerState.PLAYING && !videoStarted) {
        // Set the playback speed (0.5 is half speed, 2 is double speed)
        event.target.setPlaybackRate(0.25);
    
        setVideoStarted(true);
    
        // Hide the loading icon after 4 seconds
        setTimeout(() => {
          setLoadingIconVisible(false);
        }, 4000);
    
        // Check remaining time periodically
        intervalId = setInterval(() => {
          const remainingTime = event.target.getDuration() - event.target.getCurrentTime();
          
          // Check if remaining time is less than or equal to 5 seconds
          if (remainingTime <= 7) {
            // Pause the video 5 seconds before the end
            event.target.pauseVideo();
            clearInterval(intervalId);
    
            // Wait for a moment and then restart the video
            setTimeout(() => {
              event.target.seekTo(0);
              event.target.playVideo();
            }, 1000);
          }
        }, 1000); // Check every second
      }
    
      // Event triggered when video ends
      if (event.data === window.YT.PlayerState.ENDED) {
        // Restart the video
        event.target.seekTo(0);
        event.target.playVideo();
        clearInterval(intervalId); // Clear the interval to stop checking remaining time
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
          className={loadingIconVisible ? '' : 'rotating-image.hidden'}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <img
            src={rotatingImage}
            alt="Rotating Image"
            className="rotating-image"
          />
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
          backgroundColor: '#333',
          zIndex: 1,
          opacity: loadingIconVisible ? 1 : 0.9,
          transition: 'opacity 4s ease-in-out', // Adjust the duration and easing as needed
        }}
      ></div>
      {/* Other components can be added here if needed */}
    </div>
  );
};

export default YouTubeBackground;

