import React from 'react'
import Navbar from './components/Navbar'
import {  Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import Footer from './components/Footer'
import Layout from './pages/Admin/Layout'
import DashBoard from './pages/Admin/DashBoard'
import AddShows from './pages/Admin/AddShows'
import ListShow from './pages/Admin/ListShows'
import ListBooking from './pages/Admin/ListBooking'
import {Toaster} from 'react-hot-toast'

const App = () => {
  
  const isAdminRoute=useLocation().pathname.startsWith('/admin' );
  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar />}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:id' element={<MovieDetails/>}/>
      <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
      <Route path='/mybookings' element={<MyBookings/>}/>
      <Route path='/favorite' element={<Favorite/>}/>
      <Route  path='/admin/*' element={<Layout />}>
      <Route index element={<DashBoard />}/>
      <Route path='add-shows' element={<AddShows />}/>
      <Route path='list-shows' element={<ListShow />}/>
      <Route path='list-bookings' element={<ListBooking />}/>

      </Route>
    </Routes>
  {!isAdminRoute && <Footer />}
    </>
  )
}

export default App