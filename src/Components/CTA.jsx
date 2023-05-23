import style from '../style';
import Buttons from './Buttons';

const CTA = () => (
  <section className={`sm:flex-row flex-col bg-black-gradient-2 box-shadow rounded-[20px] 
  ${style.padding} ${style.marginY} ${style.flexCenter}`}
  >
    <div className='flex-1 flex flex-col'>
      <h2 className={style.heading2}>
        Let's try our service now!
      </h2>
      <p className={`${style.paragraph} text-left max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Fuga beatae, quam excepturi 
        corrupti itaque quibusdam adipisci cupiditate 
        harum ipsam soluta omnis eaque aperiam sed quo, 
        incidunt atque repellat optio odio?
      </p>
    </div>
    <div className={`${style.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Buttons />
    </div>
  </section>
)

export default CTA