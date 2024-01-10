import axios from "axios";
import { useEffect, useState } from "react";

const useAuth = () => {
    const [auth,setAuth] = useState();

    const islogin = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/api/auth/isloggedin",{withCredentials : true})
            return resp.data
        } catch (error) {
            console.log(error);
            return false
        }
    }

    useEffect(()=>{
        (
            async () =>{
                const data = await islogin();
                setAuth(data)
                
            }
        )();
    })
    return {auth}
}

export default useAuth;