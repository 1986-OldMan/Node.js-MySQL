import express from 'express';
import { getAllnotes , getNote , createNote } from './database.js';

const app = express();
app.use(express.json());

//routes
app.get('/notes' , async (req , res) => {
    const notes = await getAllnotes()
    res.send(notes);
});

app.get('/notes/:id' , async (req , res) => {
    const id = req.params.id
    const note = await getNote(id)
    res.send(note)
});

app.post('/notes' , async (req , res) => {
    const { title , contents } = req.body
    const note = await createNote(title , contents)
    res.status(201).send(note)
})

//error handler
app.use((err , req , res , next) => {
    console.error(err.stack)
    res.status(500).send('Something broke....!')
})

//server
const port = process.env.PORT
const server = app.listen(port , () => {
    console.log(`App running on port ${port}...`);
})