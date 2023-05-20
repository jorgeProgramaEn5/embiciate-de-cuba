import React from 'react';
import { stats } from '../constants';
import style from '../style';

const Stats = () => (
  <section className={`${style.flexCenter} flex-wrap flex-row sm:mb-20 mb-6 text-white`}>
    {stats.map(stat=>{
      return (
        <div key={stat.id} className={`flex-1 flex justify-start items-center `}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] m-3'>
            {stat.value}
          </h4>
          <p className='font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
            {stat.title}
          </p>
        </div>
      )
    })}
  </section>
)


export default Stats