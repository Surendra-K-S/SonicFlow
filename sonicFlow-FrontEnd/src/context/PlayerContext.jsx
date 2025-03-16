import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

export const PlayerContextProvider = (props) => {
    
   const audioRef = useRef();
   const seekBg = useRef();
   const seekBar = useRef();

   const [track, setTrack] = useState(songsData[0]);
   const [PlayStatus, setPlayStatus] = useState(false);
   const [time, setTime] = useState({
         currentTime: {
            second: 0,
            minute: 0
         },
         totalTime: {
            second: 0,
            minute: 0
         }
   });

   const play = () => {
      audioRef.current.play();
      setPlayStatus(true);
   }

   const pause = () => {
      audioRef.current.pause();
      setPlayStatus(false);
   }

   const playWidthId = (id) => {
      if (id === undefined) return;
      
      setTrack(songsData[id]);
      // Use setTimeout to ensure track is updated before playing
      setTimeout(() => {
         audioRef.current.play()
         .then(() => setPlayStatus(true))
         .catch(err => console.error("Error playing audio:", err));
      }, 50);
   }

   const previous = () => {
      if(track.id > 0){
         setTrack(songsData[track.id - 1]);
         setTimeout(() => {
            audioRef.current.play()
            .then(() => setPlayStatus(true))
            .catch(err => console.error("Error playing previous track:", err));
         }, 50);
      }
   }

   const next = () => {
      if(track.id < songsData.length-1){
         setTrack(songsData[track.id + 1]);
         setTimeout(() => {
            audioRef.current.play()
            .then(() => setPlayStatus(true))
            .catch(err => console.error("Error playing next track:", err));
         }, 50);
      }
   }

   const seekSong = (e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration);
   } 



   useEffect(() => {
      if (!audioRef.current) return;
      
      const updateTime = () => {
         if (!audioRef.current.duration) return;
         
         seekBar.current.style.width = `${Math.floor(audioRef.current.currentTime/audioRef.current.duration * 100)}%`;
         setTime({
            currentTime: {
               second: String(Math.floor(audioRef.current.currentTime % 60)).padStart(2, '0'),
               minute: Math.floor(audioRef.current.currentTime / 60)
            },
            totalTime: {
               second: String(Math.floor(audioRef.current.duration % 60)).padStart(2, '0'),
               minute: Math.floor(audioRef.current.duration / 60)
            }
         });
      };
      
      audioRef.current.addEventListener('timeupdate', updateTime);
      
      return () => {
         if (audioRef.current) {
            audioRef.current.removeEventListener('timeupdate', updateTime);
         }
      };
   }, []);
    
   const contextValue = {
       audioRef,
       seekBg,
       seekBar,
       track,
       setTrack,
       PlayStatus,
       setPlayStatus,
       time,
       setTime,
       play,
       pause,
       playWidthId,
       previous,
       next,
       seekSong
   }
   
   return (
       <PlayerContext.Provider value={contextValue}>
          {props.children}
       </PlayerContext.Provider>
   )
}