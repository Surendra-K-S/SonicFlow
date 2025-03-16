import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const {audioRef, track} = useContext(PlayerContext)
  
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio 
        ref={audioRef} 
        src={track?.file || ''} 
        preload='auto'
        onPlay={() => console.log('Playing')}
        onPause={() => console.log('Paused')}
      ></audio>
    </div>
  )
}

export default App