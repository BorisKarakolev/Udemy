import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideo = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (search) => {
    const response = await youtube.get("/search", {
      params: {
        q: search,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search]
};

export default useVideo;
