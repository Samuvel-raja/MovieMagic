import express from 'express'
const moviebookrouter=express.Router()
import { bookMovie, deletebook, getAllbook, updatebook } from '../controllers/moviebook_con.js'
moviebookrouter.post('/moviebook',bookMovie)
moviebookrouter.get('/allbook',getAllbook)
moviebookrouter.put('/updatebook/:id',updatebook)
moviebookrouter.delete('/deletebook/:id',deletebook)

export default moviebookrouter