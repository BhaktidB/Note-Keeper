import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import CreateArea from './components/CreateArea'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import notes from './notes'
const LOCAL_STORAGE_KEY = "MY_NOTES"

// function createNotes(noteItem){
//   return <Card 
//           key={noteItem.key}
//           title={noteItem.title}
//           content={noteItem.content}
//           />
// }

function App() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes])


  const addNote = (newNote) => {
    setNotes((preVal) => { return [...preVal, newNote] })
  }

  const deleteNote = (id) => {
    // console.log('delete triggered')
    setNotes(preVal => {
      return preVal.filter((itemNote, index) => {
        return index !== id
      })
    })
  }

  return (
    <>
      <Navbar />
      {/* <Card title={'tis title'} content={'tis content'}/> */}
      {/* {notes.map(createNotes)} */}
      <CreateArea addNote={addNote} />
      {
        notes.map((newItem, index) => {
          return <Card key={index} id={index} title={newItem.title} content={newItem.content} deleteNote={deleteNote} />
        })
      }
      <Footer />
    </>
  )
}

export default App
