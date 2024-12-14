import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import CaptionInput from "./components/CaptionInput";
import CaptionList from "./components/CaptionList"; 
import "./styles.css"; // Include the updated styles

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [theme, setTheme] = useState("light");

  const handleAddCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      <h1>Video Caption Tool</h1>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
      <div className="caption-form">
        <input
          type="text"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </div>
      {videoUrl && (
        <>
          <div className="video-container">
            <VideoPlayer videoUrl={videoUrl}  captions={captions} />
          </div>
          <CaptionInput onAddCaption={handleAddCaption} />
        </>
      )}
      <CaptionList captions={captions} setCaptions={setCaptions} />
    </div>
  );
};

export default App;
