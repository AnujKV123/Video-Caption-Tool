import React, { useRef } from "react";

const VideoPlayer = ({ videoUrl, captions }) => {
  const videoRef = useRef(null);

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={videoUrl}
        controls
        className="video-element"
        crossOrigin="anonymous"
        style={{ width: "100%", height: "400px" }}
      >
        <track
          kind="subtitles"
          src={generateVTTFile(captions)}
          srcLang="en"
          label="English"
          default
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// Generate WebVTT (Subtitle) content dynamically
const generateVTTFile = (captions) => {
  const vttLines = captions.map(
    (caption, index) =>
      `${index + 1}\n${formatTime(caption.start)} --> ${formatTime(
        caption.end
      )}\n${caption.text}\n\n`
  );
  const vttContent = `WEBVTT\n\n${vttLines.join("")}`;
  const blob = new Blob([vttContent], { type: "text/vtt" });
  return URL.createObjectURL(blob);
};

// Format time in HH:MM:SS.mmm for WebVTT
const formatTime = (time) => {
  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(Math.floor(time % 60)).padStart(2, "0");
  const milliseconds = String(Math.floor((time % 1) * 1000)).padStart(3, "0");
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};

export default VideoPlayer;
