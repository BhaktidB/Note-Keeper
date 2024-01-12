import React from 'react';
import '../styles/Card.css';
import DeleteIcon from '@mui/icons-material/Delete';


const Card = ({ title, content, deleteNote, id }) => {
  const handleDelete = () => {
    deleteNote(id)

  }
  return (
    <>

      <div className='card_card'>
        <p className='card_title'>{title}</p>
        <p className='card_content' >{content}</p>
        <button className='deleteBtn' onClick={handleDelete}><DeleteIcon /></button>
      </div>


    </>
  )
}

export default Card