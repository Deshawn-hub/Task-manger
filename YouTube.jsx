import React, { useState, useEffect } from "react";
import axios from "axios";

function YouTube({ task }) {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const fetchVideos = async (keyword) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            q: keyword,
            part: "snippet",
            maxResults: 1,
            type: "video", 
            key: "AIzaSyAKWkZ-_78bUQPrNAWLYQrBrxjvKEBt0-w",
          },
        }
      );

      if (response.data.items && response.data.items.length > 0) {
        setVideos(response.data.items);
        setError(null);
      } else {
        setError("No videos found for this task");
      }
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      setError("Failed to load videos. Please try again later.");
    }
  };

  useEffect(() => {
    if (task) {
      fetchVideos(task);
    }
  }, [task]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Related Video</h3>
      <div className="video-container">
        {videos.map((video) => (
          <div key={video.id.videoId} className="mb-4">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="mt-2 text-sm">{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YouTube;