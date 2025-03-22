// import React, { useContext } from "react";
// import Sidebar from "./components/sidebar";
// import Player from "./components/Player";
// import Display from "./components/Display";
// import { PlayerContext } from "./context/PlayerContext";

// const App = () => {
//   const { audioRef, track, songsData } = useContext(PlayerContext);

//   return (
//     <div className="h-screen bg-black">
//       <div className="h-screen bg-black">
//         {songsData.length !== 0 ? 
//           <>
//             <div className="h-[90%] flex">
//               <Sidebar />
//               <Display />
//             </div>
//             <Player />
//           </>
//          : null
//         }
//       </div>

//       <audio
//         ref={audioRef}
//         //src={track?track.file:""}
//         src={track && track.file ? track.file : null}
//         preload="auto"
//         onPlay={() => console.log("Playing")}
//         onPause={() => console.log("Paused")}
//       ></audio>
//     </div>
//   );
// };

// export default App;

import React, { useContext } from "react";
import Sidebar from "./components/sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-screen bg-black">
        {songsData?.length !== 0 ? ( // Safely check for songsData
          <>
            <div className="h-[90%] flex">
              <Sidebar />
              <Display />
            </div>
            <Player />
          </>
        ) : null}
      </div>

      <audio
        ref={audioRef}
        src={track ? track.file : null}
        preload="auto"
        // onPlay={() => console.log("Playing")}
        // onPause={() => console.log("Paused")}
      ></audio>
    </div>
  );
};

export default App;