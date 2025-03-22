import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seekSong,
    seekBg,
    seekBar,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    isShuffle,
    setIsShuffle,
    isLoop,
    setIsLoop,
  } = useContext(PlayerContext);

  const toggleShuffle = () => setIsShuffle((prev) => !prev);
  const toggleLoop = () => setIsLoop((prev) => !prev);

  return track ? (
    <div>
      <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
        <div className="hidden lg:flex items-center gap-4">
          <img className="w-12" src={track.image} alt="Track" />
          <div>
            <p>{track.name}</p>
            <p>{track.desc?.slice(0, 12)}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 m-auto">
          <div className="flex gap-4">
            {/* Shuffle Button */}
            <img
              className="w-4 cursor-pointer"
              src={assets.shuffle_icon}
              alt="shuffle"
              onClick={toggleShuffle}
            />

            {/* Previous Button */}
            <img
              onClick={previous}
              className="w-4 cursor-pointer"
              src={assets.prev_icon}
              alt="previous"
            />

            {/* Play / Pause Button */}
            {!playStatus ? (
              <img
                onClick={play}
                className="w-4 cursor-pointer"
                src={assets.play_icon}
                alt="play"
              />
            ) : (
              <img
                onClick={pause}
                className="w-4 cursor-pointer"
                src={assets.pause_icon}
                alt="pause"
              />
            )}

            {/* Next Button */}
            <img
              onClick={next}
              className="w-4 cursor-pointer"
              src={assets.next_icon}
              alt="next"
            />

            {/* Loop Button */}
            <img
              className="w-4 cursor-pointer"
              src={assets.loop_icon}
              alt="loop"
              onClick={toggleLoop}
            />
          </div>

          {/* Time and Seek Bar */}
          <div className="flex items-center gap-5">
            <p>
              {time.currentTime.minute}:{time.currentTime.second}
            </p>
            <div
              ref={seekBg}
              onClick={seekSong}
              className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
            >
              <hr
                ref={seekBar}
                className="h-1 border-none w-0 bg-green-800 rounded-full"
              />
            </div>
            <p>
              {time.totalTime.minute}:{time.totalTime.second}
            </p>
          </div>
        </div>

        {/* Additional Controls */}
        <div className="hidden lg:flex items-center gap-2 opacity-75">
          <img className="w-4" src={assets.plays_icon} alt="play" />
          <img className="w-4" src={assets.mic_icon} alt="mic" />
          <img className="w-4" src={assets.queue_icon} alt="queue" />
          <img className="w-4" src={assets.speaker_icon} alt="speaker" />
          <img className="w-4" src={assets.volume_icon} alt="volume" />
          <div className="w-20 bg-slate-50 h-1 rounded"></div>
          <img
            className="w-4"
            src={assets.mini_player_icon}
            alt="mini player"
          />
          <img className="w-4" src={assets.zoom_icon} alt="zoom" />
        </div>
      </div>
    </div>
  ) : null;
};

export default Player;

// import React, { useContext } from 'react'
// import { assets,songsData } from '../assets/assets'
// import { PlayerContext } from '../context/PlayerContext'

// const Player = () => {
//   const {seekSong,seekBg, seekBar, PlayStatus, play, pause, track, time, previous, next} = useContext(PlayerContext)

//   return track ? (
//     <div>
//      <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
//       <div className='hidden lg:flex items-center gap-4'>
//          <img className='w-12' src={track.image} alt="" />
//          <div>
//             <p>{track.name}</p>
//             <p>{track.desc?.slice(0,12)}</p>
//          </div>
//       </div>
//       <div className='flex flex-col items-center gap-1 m-auto'>
//           <div className='flex gap-4'>
//             <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="shuffle" />
//             <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="previous" />
//             {!PlayStatus ?
//               <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="play" /> :
//               <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="pause" />
//             }
//             <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="next" />
//             <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="loop" />
//           </div>
//           <div className='flex items-center gap-5'>
//             <p>{time.currentTime.minute}:{time.currentTime.second}</p>
//             <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
//                <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
//             </div>
//             <p>{time.totalTime.minute}:{time.totalTime.second}</p>
//           </div>
//         </div>
//         <div className='hidden lg:flex items-center gap-2 opacity-75'>
//             <img className='w-4' src={assets.plays_icon} alt="" />
//             <img className='w-4' src={assets.mic_icon} alt="" />
//             <img className='w-4' src={assets.queue_icon} alt="" />
//             <img className='w-4' src={assets.speaker_icon} alt="" />
//             <img className='w-4' src={assets.volume_icon} alt="" />
//             <div className='w-20 bg-slate-50 h-1 rounded'></div>
//             <img className='w-4' src={assets.mini_player_icon} alt="" />
//             <img className='w-4' src={assets.zoom_icon} alt="" />
//         </div>
//      </div>
//    </div>
//   ) : null
// }

// export default Player
