import axios from 'axios';
import img1 from '../../assets/doctor-img01.png'
import About from './doctor_about';
import SideBox from './side_box';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const DoctorInfo = () => {
    const {id} = useParams();
    const [doctor,setDoctor] = useState()
    const getSingleData = async() => {
        const res = await axios.post("http://localhost:5000/api/doctor/getsingledata",{id : id},{withCredentials : true});
        setDoctor(res.data.existing)
    }
   
        useEffect(()=>{
            getSingleData()
        },[])
    
    
    return(
        <div className='max-w-[1170px] py-[2rem] md:py-[3rem] px-4 mx-auto'>
            <div className='grid md:grid-cols-3 gap-[50px]'>
                <div className='md:col-span-2'>
                    <div className='flex items-center gap-5'>
                        <figure className='max-w-[200px] mx-auto md:mx-0 max-h-[200px]'>
                            <img src={img1} alt="" className='w-full' />
                        </figure>
                    </div>
                    <div className='mt-[50px] border-b border-solid border-[#0066ff34] text-center'>
                        <button className={`px-5 py-2 mr-5 border-b-2 border-primaryColor leading-7 text-[16px] font-semibold text-headingColor`}>About</button>
                        <button className={`px-5 py-2 mr-5 leading-7 text-[16px] font-semibold text-headingColor`}>Feedback</button>
                    </div>
                    <div className='mt-[50px] '>
                        <About doctor={doctor}/>
                    </div>
                </div>
                <div>
                    {/* side panel */}
                    <SideBox doctor={doctor}/>
                </div>

            </div>
        </div>
    )
}

export default DoctorInfo;