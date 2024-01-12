import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();

  return (
    <footer className='pos'>
        Copyright &copy; 2023
    </footer>
  )
}

export default Footer