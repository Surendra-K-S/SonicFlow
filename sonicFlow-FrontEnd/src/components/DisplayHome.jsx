import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './songItem'

const DisplayHome = () => {
   return (
      <>
      <Navbar />
      <div className='mb-4'>
         <h1 className='my-5 font=blod text-2xl'>Featured Charts</h1>
         <div className='flex flex-row overflow-x-auto gap-4 pb-4 no-scrollbar'>
           {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
         </div>
      </div>  
      <div className='mb-4'>
         <h1 className='my-5 font=blod text-2xl'>Today's biggest hits</h1>
         <div className='flex flex-row overflow-x-auto gap-4 pb-4 no-scrollbar'>
           {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
         </div>
      </div>    
      </>
   )
}

export default DisplayHome