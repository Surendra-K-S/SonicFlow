//

import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";

// Create the PlayerContext
export const PlayerContext = createContext();

// Create the PlayerContextProvider component
export const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const url = "http://localhost:4000"; // Fix the URL typo

  // States for songs, albums, track, play status, and time
  const [songsData, setSongsData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);
  const [track, setTrack] = useState(null); // Default track should be null, not undefined
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  // Play and Pause functions
  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = async (id) => {
    await songsData.map((item) => {
      if (id === item._id) {
        setTrack(item);
      }
    });
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    songsData.map(async (item, index) => {
      if (track._id === item._id && index > 0) {
        await setTrack(songsData[index - 1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    });
  };

  const next = async () => {
    songsData.map(async (item, index) => {
      if (track._id === item._id && index < songsData.length) {
        await setTrack(songsData[index + 1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    });
  };

  const seekSong = (e) => {
    if (audioRef.current && seekBg.current) {
      audioRef.current.currentTime =
        (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
        audioRef.current.duration;
    }
  };

  // Fetch songs and albums data
  const getSongsData = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      setSongsData(response.data.songs);
      setTrack(response.data.songs[0]);
    } catch (error) {
      console.error("Error fetching songs data:", error);
    }
  };

  const getAlbumsData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      setAlbumsData(response.data.album);
    } catch (error) {
      console.error("Error fetching albums data:", error);
    }
  };

  // Handle time updates
  useEffect(() => {
    if (!audioRef.current) return;

    const updateTime = () => {
      if (!audioRef.current.duration) return;
      seekBar.current.style.width = `${Math.floor(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      )}%`;
      setTime({
        currentTime: {
          second: String(
            Math.floor(audioRef.current.currentTime % 60)
          ).padStart(2, "0"),
          minute: Math.floor(audioRef.current.currentTime / 60),
        },
        totalTime: {
          second: String(Math.floor(audioRef.current.duration % 60)).padStart(
            2,
            "0"
          ),
          minute: Math.floor(audioRef.current.duration / 60),
        },
      });
    };

    audioRef.current.addEventListener("timeupdate", updateTime);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTime);
      }
    };
  }, []);

  // Fetch data on component mount
  useEffect(() => {
    getSongsData();
    getAlbumsData();
  }, []); // Empty dependency array to ensure it only runs once

  // Provide context values
  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
    songsData,
    albumsData,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};
