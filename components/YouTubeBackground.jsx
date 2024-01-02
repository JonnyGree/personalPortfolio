import React, { useEffect } from 'react';

const YouTubeBackground = () => {
  useEffect(() => {
    // Load the YouTube API script asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Function called when the YouTube API is ready
    const onYouTubeIframeAPIReady = () => {
      // Create a new YouTube player
      const player = new window.YT.Player('video-container', {
        height: '100%',
        width: '100%',
        videoId: 'YOUR_VIDEO_ID', // Replace with your actual video ID
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: 'YOUR_VIDEO_ID', // Replace with your actual video ID
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

    // Function called when the player is ready
    const onPlayerReady = (event) => {
      // Set the playback speed (0.5 is half speed, 2 is double speed)
      event.target.setPlaybackRate(0.5);
    };

    // Cleanup function
    return () => {
      // Remove the YouTube API script when the component is unmounted
      const scriptElement = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div id="video-container">
      {/* Other components can be added here if needed */}
    </div>
  );
};

export default YouTubeBackground;