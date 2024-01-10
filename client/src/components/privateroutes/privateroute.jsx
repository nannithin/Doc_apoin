
import {  useDispatch, useSelector } from "react-redux";
import useAuth from "../hooks/useauth";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { setuser } from "../../redux/userSlice";

const Private = () => {
    const {auth} = useAuth();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);

    const getUser = async() => {
        try {
            const res = await axios.get('http://localhost:5000/api/user/getuser',{withCredentials : true})
            if(res){
                dispatch(setuser(res.data.user))
            }else{
                <Navigate to='/signin'></Navigate>
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        if(!user){
            getUser()
        }
    },[user,getUser])

    if(auth===undefined){
        return "Loading..."
    }

    return auth ? <Outlet></Outlet> : <Navigate to="/signin"/>
    
}

export default Private;