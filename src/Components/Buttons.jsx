import React from 'react'

const Buttons = ({ styles }) => (
  <button 
    type='button' 
    className={`w-[100px] h-[100px] font-poppins font-medium text-[18px] rounded-full text-primary outline-none bg-blue-gradient ${styles}`}
  >
    Solicitar
  </button>
)

export default Buttons