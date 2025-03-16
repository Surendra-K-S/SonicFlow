  import React from 'react'
  import 'react-toastify/dist/ReactToastify.css';
  import { ToastContainer, toast } from 'react-toastify';
  import { Routes,Route } from 'react-router-dom';
  import AddSong from './pages/AddSong';
  import AddAlbum from './pages/AddAlbum';
  import ListAlbum from './pages/ListAlbum';
  import ListSong from './pages/ListSong';
  import Sidebar from './components/Sidebar';
  import Navbar from './components/Navbar';

  export const url = 'http://localhost:4000'

  const App = () => {
    return (
      <div className = 'flex items-center start min-h-screen'>
      <ToastContainer />
      <Sidebar />
        <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
          <Navbar />
          <div className='pt-8 pl-5 sm:pl sm:pl-12'>
          <Routes>
            <Route path='/' element={<ListAlbum/>} />
            <Route path='/add-Song' element={<AddSong/>} />
            <Route path='/add-Album' element={<AddAlbum/>} />
            <Route path='/list-Song' element={<ListSong/>} />
            <Route path='/list-Album' element={<ListAlbum/>} />
          </Routes>

          </div>
        </div>
      </div>
    )
  }

export default App