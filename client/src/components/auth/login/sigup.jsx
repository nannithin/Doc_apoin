import { Link, useNavigate } from 'react-router-dom';
import mainsvg from '../../../assets/undraw_access_account_re_8spm (1).svg'
import {AiOutlineGoogle} from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useauth';

const Signup = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [cpassword,setCpassword] = useState("")
  const navigate = useNavigate()
  const {auth} = useAuth();
    console.log(auth)

    useEffect(()=>{
        if(auth){
            navigate('/')
        }
    },[auth,navigate])


  const Submithadler = async(e)=>{
    e.preventDefault();
    const user = {
      name : name,
      email : email,
      password : password,
    }
    const resp = await axios.post("your api",user);
    console.log(resp.data)
  }

    return(
        <div className='container flex flex-col py-[3rem] md:flex-row gap-[32px] md:gap-0 justify-around items-center mt-8 md:mt-12 '>
            <div>
                <img className='w-[300px] md:w-[350px]' src={mainsvg} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
                <div className='text-center my-2 md:my-3'>
                    <h1 className='text-[26px] text-headingColor font-bold'>Welcome!</h1>
                    <p className='text-textColor text-[19px] font-semibold'>Signin to your Account</p>
                </div>
                <div className='flex flex-col gap-4 my-2 w-[300px]'>
                    <div>
                      <input className='w-full outline-none border-2 py-2 pl-4 rounded-full' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='name' name="" id="" />
                    </div>
                    <div>
                      <input className='w-full outline-none border-2 py-2 pl-4 rounded-full' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' name="" id="" />
                    </div>
                    <div>
                      <input className='w-full outline-none border-2 py-2 pl-4 rounded-full' type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' name="" id="" />
                    </div>
                    <div>
                      <input className='w-full outline-none border-2 py-2 pl-4 rounded-full' type="password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} placeholder='confirm Password' name="" id="" />
                    </div>
                    <p className='text-[16px] font-semibold text-center'>Forgot password?</p>
                    <div className='text-white font-semibold flex justify-center items-center gap-4'>
                    <Link  className='bg-primaryColor w-1/2 px-4 py-2 rounded-full text-center' to="/signin"><button>LOG IN</button></Link>
                        <button onClick={Submithadler} className='border-primaryColor border-[2px] text-primaryColor w-1/2 px-4 py-2 rounded-full'>SIGN UP</button>
                    </div>
                </div>
                <div>
                    <p className='text-textColor font-semibold text-[19x] my-5 text-center'>OR LOGIN WITH</p>
                    <div className='flex gap-5 justify-center text-white text-2xl'>
                      <button className=' bg-gray-600 rounded-full px-2 py-2 inline-block '><AiOutlineGoogle/></button>
                      <button className=' bg-gray-600 rounded-full px-2 py-2 inline-block '><AiOutlineGoogle/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
