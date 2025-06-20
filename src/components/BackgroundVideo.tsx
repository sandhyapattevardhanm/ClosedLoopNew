import React, { useEffect, useRef } from 'react';

const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set video properties
      video.volume = 0;
      video.defaultMuted = true;
      video.muted = true;

      // Ensure video plays
      const playVideo = async () => {
        try {
          await video.play();
          console.log('Video started playing successfully');
        } catch (error) {
          console.log('Video autoplay failed:', error);
          // Retry playing the video
          video.play().catch(() => {
            // If autoplay fails, try with user interaction
            document.addEventListener('click', () => {
              video.play().catch(() => {});
            }, { once: true });
          });
        }
      };

      // Handle video loading
      const handleLoadedData = () => {
        console.log('Video loaded, attempting to play...');
        playVideo();
      };

      // Ensure video loops continuously
      const handleEnded = () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      };

      // Handle video errors
      const handleError = () => {
        console.log('Video loading error, retrying...');
        video.load();
      };

      // Add event listeners
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('ended', handleEnded);
      video.addEventListener('error', handleError);

      // Initial play attempt
      playVideo();

      // Cleanup
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          filter: 'blur(2px)',
          minHeight: '100vh',
          minWidth: '100vw',
          zIndex: -1
        }}
        poster="/Blue Logo no bg.png"
      >
        <source src="/loops BG blurred.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Fallback background in case video fails */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a]" />
    </div>
  );
};

export default BackgroundVideo; 