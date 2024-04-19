import React from 'react'
import Header from './Header'
import MovieItemHome from './MovieItemHome'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Home = ({ data }) => {
  return (
    <>
      <Navbar data={data}/>
      <Header />
      <MovieItemHome data={data} />
    </>
  )
}

export default Home