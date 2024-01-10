import doctor1 from '../../assets/doctor-img01.png'
import {FiArrowRight} from 'react-icons/fi';
import {AiFillStar} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DoctCard = ({item}) => {
    
    return(
        <div>
            <div className='max-w-[250px] mx-auto my-5 flex flex-col  gap-5 md:max-w-[300px]'>
                <div className='w-full'>
                    <img src={doctor1} alt="" />
                </div>
                <div>
                    <h2 className='font-extrabold md:text-[21px] text-[19px] capitalize'>{item.name}</h2>
                    <div className='flex justify-between items-center mt-2'>
                        <p className='bg-[#CCF0F3] text-irisBlueColor font-[600] px-2 py-2 rounded-md'>{item.profession}</p>
                        <p className='flex gap-1 items-center'><AiFillStar className='text-yellow-300'/><span className='text-textColor font-[700]'>4.8</span></p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className=''>
                      <h3 className='text-headingColor font-[800]'>+1000 patients</h3>
                      <p className='text-textColor text-[15px] font-[500]'>At Rushingi Hospital</p>
                    </div>

                    <Link to={`/doctors/${item._id}`}><button className='border-2 border-textColor rounded-full p-2 py-2'><FiArrowRight className='text-2xl text-textColor text-center'/></button>
</Link>
                </div>
                
                    <div className='w-full h-[2px] rounded-md mt-1 bg-gray-400  '></div>
                
            </div>
        </div>
    )
}

export default DoctCard;