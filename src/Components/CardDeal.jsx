import { card } from '../assets';
import style, { layout } from '../style';
import Buttons from './Buttons';


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={style.heading2}>
        Find a better card deal, <br className='sm:block hidden'/> 
        in few easy steps
      </h2>
      <p className={`${style.paragraph} max-w-[470px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis 
        blanditiis nihil error eum! Laboriosam, delectus. Dolorem delectus at suscipit 
        distinctio natus. Qui tempora voluptas eligendi aliquid iste sint dolor!
      </p>
      <Buttons styles='mt-10' />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%] relative '/>
    </div>
  </section>
)

export default CardDeal