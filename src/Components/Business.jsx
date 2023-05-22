import React from 'react';
import { features } from '../constants';
import style, { layout } from '../style';
import Buttons from './Buttons';

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] 
      ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}
    >
      <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${style.flexCenter}`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-containt'/>
      </div>
      <div className='flex-1 flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
          {content}
        </p>
      </div>
    </div>
  )
}

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

        <Buttons styles='mt-10' />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=>(
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business