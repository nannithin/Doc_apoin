import logo from '../../assets/logo.png';
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {GrClose} from 'react-icons/gr';
// import useAuth from '../hooks/useauth';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [open,setOpen] = useState(false)
    const {user} = useSelector(state => state.user);
    // const {auth} = useAuth()
    
    const NavLinks = [
        {
            link : '/',
            name : "Home"
        },
        {
            link : '/doctors',
            name : 'Find'
        },
        {
            link : '/services',
            name : 'services'
        },{
            link : '/contact',
            name : 'Contact'
        },
    ]

    
    
    return(
      <div className='border-b-2 h-[80px] sticky top-0 z-100 bg-white'>
        <div className=' container flex items-center h-full relative justify-between '>
            <div className='md:hidden z-20 text-2xl' onClick={()=>setOpen(!open)}>
                {!open ? <AiOutlineMenu /> : <GrClose/> }
            </div>
            <div className='z-20'>
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className={`md:flex gap-[30px] block fixed md:static ${open ? "left-0" : "left-[-100%] "} top-0 h-screen md:h-auto md:w-auto w-[12rem] z-10 bg-white md:bg-transparent md:pt-0 pt-[7rem] md:duration-0 duration-500 `}>
                    {
                        NavLinks.map((item,index)=>(
                            <Link to={item.link} key={index} onClick={()=>setOpen(false)}><li className='text-textColor cursor-pointer text-[17px] md:text-[19px] text-center md:my-0 my-5' key={index}>{item.name}</li></Link>
                        ))
                    }
                    {user && user.role == "admin" &&  <li className='text-textColor cursor-pointer text-[17px] md:text-[19px] text-center md:my-0 my-5'>Add doctor</li>}
                </ul>
            </div>
            <div>
                {!user ? <Link to="/signup"><button className='btn'>Signup</button></Link> : <button className='btn'>{user.name}</button>}
            </div>
        </div>
      </div>
    )
}

export default Navbar;