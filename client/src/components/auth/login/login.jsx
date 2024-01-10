import { Link, useNavigate } from 'react-router-dom';
import mainsvg from '../../../assets/undraw_access_account_re_8spm (1).svg'
import {AiOutlineGoogle} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useauth';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const {auth} = useAuth();
    console.log(auth)

    useEffect(()=>{
        if(auth){
            navigate('/')
        }
    },[auth,navigate])

    const Submithandler = async (e) => {
        e.preventDefault();
        const user = {
            email : email,
            password : password,
        }
        const resp = await axios.post("http://localhost:5000/api/auth/login",user,{
            withCredentials : true
        })
        if(resp.data == "Login Sucessfull"){
            navigate("/")
            alert(resp.data)
        }else{
            alert(resp.data)
        }
        
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
                      <input className='w-full outline-none border-2 py-2 pl-4 rounded-full' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' name="" id="" />
                    </div>
                    <div>
                      <input className='w-full outline-none border-2 py-2 pl-4 rounded-full' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' name="" id="" />
                    </div>
                    <p className='text-[16px] font-semibold text-center'>Forgot password?</p>
                    <div className='text-white font-semibold flex justify-center items-center gap-4'>
                    <Link className='bg-primaryColor text-center w-1/2 px-4 py-2 rounded-full' to="/signup"><button>SIGN UP</button></Link>
                        <button onClick={Submithandler} className='border-primaryColor border-[2px] text-primaryColor w-1/2 px-4 py-2 rounded-full'>LOG IN</button>
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

export default Login;