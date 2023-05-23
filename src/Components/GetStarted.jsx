import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets'


const Getstate = () => {
  return (
    <div 
      className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient 
      rounded-full cursor-pointer p-[2px]`}
    >
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexCenter} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={ arrowUp } alt="arrowUp" className='w-[23px] h-[23px] object-contain' />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Sarted</span>
        </p>
      </div>
    </div>
  )
}

export default Getstate