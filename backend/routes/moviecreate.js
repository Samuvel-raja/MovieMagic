import express from 'express'
const moviecreaterouter = express.Router()

import { createMovie, deleteMovie, getAllMovies, updateMovie } from '../controllers/moviecreate_con.js'
moviecreaterouter.post('/moviecreate', createMovie)
moviecreaterouter.get('/allmovies', getAllMovies)
moviecreaterouter.put('/movieupdate/:id', updateMovie)
moviecreaterouter.delete('/moviedelete/:id', deleteMovie)

export default moviecreaterouter