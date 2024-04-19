
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import MoviesPage from './components/MoviesPage';
import BookMovie from './components/BookMovie';

import { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateMovie from './components/UpdateMovie';
function App() {

  const [data1, setdata1] = useState([])
  const [data2, setdata2] = useState([])

  let fetchdata1 = async () => {
    await axios.get('http://localhost:5000/allmovies')
        .then((res) => { setdata1(res.data.message) }).catch((e) => console.log(e))
  }
  let fetchdata2 = async () => {
    await axios.get('http://localhost:5000/allbook')
        .then((res) => { setdata2(res.data.message) }).catch((e) => console.log(e))
  }
    
useEffect(() => {
  fetchdata1()
  fetchdata2()       
    }, [])
    
  return (
   <>
   <Routes>
    <Route path="/" element={<Home data={data1}/>}/>
    <Route path="/bookmovie/:id" element={<BookMovie  data1={data1} />}/>
    <Route path="/updatemovie/:id" element={<UpdateMovie data={data2} setdata={setdata2} fetchdata2={fetchdata2}/>}/>
    <Route path="/bookmovie" element={<BookMovie  data1={data1} />}/>
    <Route path="/bookings" element={<MovieDetails data={data2} fetchdata2={fetchdata2}/>}/>
    <Route path="/movies" element={<MoviesPage data={data1}/>}/>
   </Routes>
   </>
  );
}

export default App;
