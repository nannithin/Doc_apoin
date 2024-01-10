import axios from "axios";
import { useState } from "react";
import {AiOutlineUser , AiOutlineMail} from "react-icons/ai"
import {GrUserWorker} from "react-icons/gr"
import {FaSchool} from 'react-icons/fa'
import {MdOutlinePriceCheck} from 'react-icons/md'

const AddDoc = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [about,setAbout] = useState("");
    const [profession,setProfession] = useState("");
    const [education,setEducation] = useState("");
    const [tokenPrice,setTokenPrice] = useState("");

    const Submithandler = async(e)=>{
        e.preventDefault();
        const doctorInfo = {
            email : email,
            name : name,
            about : about,
            profession : profession,
            education : education,
            tokenPrice : tokenPrice,
        }
        const resp = await axios.post("http://localhost:5000/api/doctor/adddoctor",doctorInfo,{withCredentials : true});
        console.log(resp.data)
    }
    return (
        <div className="md:max-w-[470px] max-w-[330px] mx-auto px-[1rem] pb-[3rem] md:px-[2rem]">
            <div>
                <h1 className="text-[30px] md:text-[32px] text-headingColor font-bold text-center py-[3rem] md:py-[4rem]">Add doctor </h1>
            </div>

            <div className="flex flex-col gap-[20px]">
                <div className="">
                    <AiOutlineUser className="absolute mt-[12px] text-textColor ml-[14px]" />
                    <input type="text" className="w-full outline-none border-2  py-2 pl-9 rounded-full " value={name} onChange={(e)=>setName(e.target.value)} placeholder="name" />
                </div>
                <div className="">
                    <AiOutlineMail className="absolute mt-[13px] text-textColor ml-[14px]" />
                    <input type="email" className="w-full outline-none border-2  py-2 pl-9 rounded-full " value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
                </div>
                <div className="">
                    <GrUserWorker className="absolute mt-[12px] text-textColor ml-[14px]" />
                    <input type="text" className="w-full outline-none border-2  py-2 pl-9 rounded-full " value={profession} onChange={(e)=>setProfession(e.target.value)} placeholder="Profession" />
                </div>
                <div>
                    <textarea className="outline-none border-2 rounded-lg resize-none w-full p-2 h-[150px]" placeholder="About doctor" name="" value={about} onChange={(e)=> setAbout(e.target.value)} id="" ></textarea>
                </div>
                <div className="">
                    <FaSchool className="absolute mt-[12px] text-textColor ml-[14px]" />
                    <input type="text" className="w-full outline-none border-2  py-2 pl-9 rounded-full " value={education} onChange={(e)=>setEducation(e.target.value)} placeholder="Education" />
                </div>
                <div className="">
                    <MdOutlinePriceCheck className="absolute mt-[12px] text-textColor ml-[14px]" />
                    <input type="text" className="w-full outline-none border-2  py-2 pl-9 rounded-full " value={tokenPrice} onChange={(e) => setTokenPrice(e.target.value)} placeholder="Token Price " />
                </div>
                <button onClick={Submithandler} className="bg-primaryColor text-white font-semibold rounded-full px-4 py-2">Add info</button>
            </div>

        </div>
    )
}

export default AddDoc;