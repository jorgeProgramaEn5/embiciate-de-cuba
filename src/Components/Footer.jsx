import style from '../style';
import { footerLinks, socialMedia } from '../constants';
import { logo_bici } from '../assets';
import React from 'react';


const Footer = () => (
  <section className={`flex-col ${style.paddingY} ${style.flexCenter}`}>
    <div className={`md:flex-row flex-col mb-8 w-full ${style.flexStart}`}>
      <div>
        <img src={logo_bici} alt='logo' className='w-[266px] h-[72px] object-contain'/>
        <p className={`${style.paragraph} text-left max-w-[420px] mt-5`}>  
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Amet explicabo
        </p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index) => (
                <li 
                  key={link.name} 
                  className={`font-poppins font-normal text-[16px] leading-[24px] 
                  text-dimWhite  cursor-pointer ${index !== footerLink.links.length -1 ? "mb-4" : "mb-0"}`}
                >
                  <a href={link.link} className={`hover:text-secondary `}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
        2023 Embici. All Rights Reserved
      </p>
      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index)=>(
          <img 
            key={social.id} 
            src={social.icon} 
            alt={social.icon}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? "mr-6" : "mr-0"}`} 

          />
        ))}
      </div>
    </div>
  </section>
)

export default Footer