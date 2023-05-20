import React from 'react';
import { features } from '../constants';
import style, { layout } from '../style';



const Business = () => {
  return (
    <section id='features' className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>
          You do the bussiness, <br className='sm:block hidden'/> we'll handle the money
        </h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis 
          blanditiis nihil error eum! Laboriosam, delectus. Dolorem delectus at suscipit 
          distinctio natus. Qui tempora voluptas eligendi aliquid iste sint dolor!
        </p>
      </div>
    </section>
  )
}

export default Business