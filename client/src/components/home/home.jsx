import img1 from '../../assets/hero-img01.png'
import Card from './aboutcard';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FiSend} from 'react-icons/fi';

const Home = () => {
  
  return (
    <div className=' flex flex-col'>
      <div className=' flex flex-col md:flex-row items-center md:justify-around justify-center md:mt-0 mt-[5rem] mb-3 md:mb-5'>
        <div className='md:max-w-[600px] max-w-[330px] md:mx-0 mx-5'>
          <h1 className='heading'>Lorem ipsum dolor amet consectetur </h1>
          <p className='text_para'>orem ipsum dolor sit amet consectetur adipisicing elit. Magnam assumenda, excepturiamet consectetur adipisicing elit. Magnam assumenda, excepturi eum ipsa,</p>
          <button className='btn my-5'>Request an Appointment</button>
          <div className='mt-7 md:mt-9 flex font-semibold flex-col md:flex-row items-center gap-5 md:gap-[30px]'>
            <div>
              <h1 className='text-black text-[36px]'>30+</h1>
              <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-17px]'></span>
              <p className='text_para'>Years of Experience</p>
            </div>
            <div className='ml-[-27px] md:ml-0'>
              <h1 className='text-black text-[36px]'>15+</h1>
              <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-17px]'></span>
              <p className='text_para'>Clinic Locations</p>
            </div>
            <div>
              <h1 className='text-black text-[36px]'>100%</h1>
              <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-17px]'></span>
              <p className='text_para'>Patient Satisifaction</p>
            </div>
          </div>
        </div>
        <div className='mt-[4rem]'>
          <img className='px-[20px]' src={img1} alt="" />
        </div>
      </div>
      <div className=' md:my-7 flex flex-col my-[2rem]'>
        <div className='max-w-[350px] mx-auto px-3'>
          <h1 className='text-headingColor font-[800] text-center  text-2xl md:text-3xl'>providing the best medical services</h1>
        </div>
        <div className='flex flex-wrap gap-6 md:gap-0 justify-around items-center  my-[3rem] py-[1rem]'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-5 px-4 md:px-[3rem] items-center my-5 md:my-[2rem]'>
        <img className='h-[60%]' src={img1} alt="" />
        <div className='max-w-[90%] md:max-w-[700px]'>
          <h1 className='text-2xl mb-2 md:mb-4 md:text-[32px] font-[800] text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores</h1>
          <p className='text_para my-2 md:my-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores officia consequuntur labore animi possimus fugiat ab doloremque non corporis? Ut repellendus, expedita tempore magni amet totam maxime voluptates cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sequi ex quo, soluta consectetur ipsam dicta quasi eos saepe doloribus in, ab libero nobis aliquid cum nesciunt atque? Excepturi, perferendis?</p>
          <button className='btn my-3'>Contact</button>
        </div>

      </div>
      <div className='bg-[#263238] flex flex-col md:flex-row text-center gap-[3rem] md:gap-0 justify-center md:justify-around py-9 px-6 md:py-[3rem] md:px-[2rem]'>
        <div className='flex flex-col text-center md:text-start gap-[32px]'>
          <h1 className='text-white font-[800] text-2xl'>Medicare.org</h1>
          <p className='text-white'>copyright 2023 medicare ltd</p>
          <div className='flex gap-5 justify-center text-white text-2xl'>
            <button className=' bg-gray-600 rounded-full px-2 py-2 inline-block '><AiOutlineInstagram/></button>
            <button className=' bg-gray-600 rounded-full px-2 py-2 inline-block '><AiOutlineInstagram/></button>
            <button className=' bg-gray-600 rounded-full px-2 py-2 inline-block '><AiOutlineInstagram/></button>
            <button className=' bg-gray-600 rounded-full px-2 py-2 inline-block '><AiOutlineInstagram/></button>
          </div>
        </div>
        <div className='flex justify-around md:justify-normal gap-0 md:gap-[7rem]'>
          <div>
            <h1 className='text-white text-[20px] font-[800]'>Company</h1>
            <div className='text-white text-start list-none my-4 md:my-6'>
              <li>Home</li>
              <li>Find</li>
              <li>Service</li>
              <li>Contact</li>
              <li>About</li>
            </div>
          </div>
          <div className='text-start px-4'>
            <h1 className='text-white font-[800] text-[20px]'>Support</h1>
            <div className='text-white   list-none my-4 md:my-6'>
              <li className='duration-300 hover:pl-2'>Help center</li>
              <li className='duration-300 hover:pl-2'>Tos</li>
              <li className='duration-300 hover:pl-2'>Legal</li>
              <li className='duration-300 hover:pl-2'>Privacy Policy</li>
              <li className='duration-300 hover:pl-2'>Status</li>
            </div>
          </div>
        </div>
        <div className='w-[250px] mx-auto md:mx-0'>
          <h1 className='text-white font-bold text-[22px] text-start '>Stay up to data</h1>
          <div className='relative my-5'>
            <input className='w-full rounded-md outline-none pl-4 py-2 text-[#263238] placeholder:text-[#263238] placeholder:font-[600]' type="text" placeholder='Your email address' name="" id="" />
            <FiSend  className='cursor-pointer absolute top-0 right-2 my-2 text-2xl'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home; 