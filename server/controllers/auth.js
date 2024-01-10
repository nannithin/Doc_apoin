import User from "../model/user.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req,res) => {
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.json("All fields are required")
    }
    else{
        let existinguser;
        try {
            existinguser = await User.findOne({email})
        } catch (error) {
            console.log(error)
        }
        if(existinguser){
            res.json("User already exist")
        }else{
            try{
                const salt = await bcryptjs.genSalt(10);
                const hashedPassword = await bcryptjs.hash(password,salt);

                const newUser = new User({
                    name: name,
                    email: email,
                    password: hashedPassword,
                })
                await newUser.save();
                return res.json("Registration Sucessfull")
            } catch(error){
                console.log(error);
                return res.json("Something went wrong with server")
            }
        }
    }
}

//login

export const Login = async(req,res) => {
    const {email,password} = req.body;
    if(!email || !password){
        return res.json("All fields are required")
    }else{
        const user = await User.findOne({email : email}).select("name email password")

        try {
            if(user){
                const isPasswordCorrect = bcryptjs.compare(password,user.password)
                if(!isPasswordCorrect){
                    return res.json("Incorrect password")
                }else{
                    const payload = {
                        id : user._id,
                        name : user.name
                    }
                    const token = jwt.sign(payload,"nani",{expiresIn : "3d"});
                    res.cookie('token',token,{
                        path: '/',
                        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000 * 3),    //3d
                        httpOnly: true,
                        sameSite: "lax"
                    });

                    return res.json("Login Sucessfull")
                }
            }else{
                return res.json("User not exist")
            }
        } catch (error) {
            console.log(error)
            return res.json("Something went wrong")
        }
    }
}

//logout 
export const logout = async(req,res) =>{
    res.clearCookie('token')
    return res.status(200).json("Logout sucessfull")
}

//verify token
 export const verifytoken = async(req,res,next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json("token missing")
    }else{
        jwt.verify(token,"nani",(err,decoded)=>{
            if(err){
                return res.json("invalid token")
            }else{
                req.id = decoded.id
            }
        })
    }
    next()
 }

 export const verifyadmin = async(req,res,next) => {
    const userId = req.id;
    let user;
    try {
         user = await User.findById(userId).select("role");
        if(user.role == "user"){
            return res.json("you are not admin")
        }
        if(user.role == "admin"){
            req.id = userId
        }
    } catch (error) {
        console.log(error)
    }
    next()
 }

 export const isLoggedin = async (req,res) => {
    const token = req.cookies.token;
    if(!token){
        return res.json(false)
    }else{
        jwt.verify(token,"nani",(err,decoded) => {
            if(err){
                return res.json(false)
            }else{
                if(decoded.id){
                    return res.json(true)
                }
            }
        })
    }
 }
 