import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MovieList({movies}) {





  return (
   
    <div className="movielist">

       {movies.map(el=><MovieCard el={el}/>)}
       
    </div>
  )
}

export default MovieList