import Doctor from "../model/doctors.js";
import User from "../model/user.js"

export const AddDoctor = async(req,res) => {
    const {name,email,about,education,tokenPrice,profession} = req.body;
    let existingdoctor = await Doctor.findOne({email : email});
    if(existingdoctor){
        return res.json("Doctor already exist in our list")
    }else{
        try {
            const newDoctor = new Doctor({
                name : name,
                email : email,
                about : about,
                education : education,
                tokenPrice : tokenPrice,
                profession : profession,
            })
            await newDoctor.save();
            return res.json("Doctor info added")
        } catch (error) {
            console.log(error);
            return res.json("something went wrong")
        }
    }
}

export const getAdminData = async(req,res) => {
    const userId = req.id;
    let user;
    try {
        user = await User.findById(userId).select("-password")
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}