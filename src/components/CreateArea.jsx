import React, { useState } from 'react'
import '../styles/Card.css'
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


const CreateArea = ({ addNote }) => {
    const [click, setClick] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote((preVal) => {
            return {
                ...preVal,
                [name]: value
            }

        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addNote(note)

        setNote({
            title: '',
            content: ''
        })
    }
    return (
        <>

            <form className='formcss'>
                {click ? <input className='createInput' type="text" name="title" value={note.title} onChange={handleChange} id="title" placeholder='Title' /> : null}
                <textarea className='createTextArea' name="content" value={note.content} onChange={handleChange} onClick={() => { setClick(true) }} id="content" cols="30" rows={click ? '4' : '1'} placeholder='Take a note...'></textarea>
                {click ? <Zoom in={true}><button className='addBtn' onClick={onSubmit}><AddIcon /></button></Zoom> : null}
            </form>
        </>
    )
}

export default CreateArea