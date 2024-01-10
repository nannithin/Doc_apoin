import axios from "axios";
import DoctCard from "./doctorcard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/doctorSlice";

const Doctors = () => {
    const [data,setData] = useState([]);
    const [searchterm,setSearchTerm] = useState("")
    const {loading} = useSelector(state => state.loading);
    const dispatch = useDispatch()
    const searchLower = searchterm.toLowerCase();

    const getData = async() => {
        dispatch(showLoading())
        const res = await axios.get("http://localhost:5000/api/doctor/getdata",{withCredentials : true});
        dispatch(hideLoading());
        setData(res.data)
    }
    
    useEffect(()=>{
        
            getData()
        
    },[])

    

    return(
        <div className="py-[2rem] md:py-[3rem]">
            <div className="flex flex-col md:px-6 px-0">
                <div className="w-[300px]  md:w-[350px] my-7 mx-auto flex ">
                    <input className="w-full  py-3 pl-4 outline-none bg-gray-300 rounded-s-full" type="text" value={searchterm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="doctor name" />
                    <button className="bg-primaryColor py-3 px-4 rounded-e-full text-white font-semibold ">search</button>
                </div>
                <div className="text-center">
                    <h2 className="font-[800] text-headingColor text-2xl md:text-3xl my-5 md:my-7">Doctors available</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
                    {
                        loading ? <div className="text-textColor font-semibold flex justify-center items-center">Loading...</div> : 
                        data.filter((item) => item.name.toLowerCase().includes(searchLower) || item.profession.toLowerCase().includes(searchLower) )?.map((item)=>(
                            
                            <DoctCard key={item._id} item={item} />
                        ))
                    }
                    
                 
                </div>
            </div>
        </div>
    )
}

export default Doctors;