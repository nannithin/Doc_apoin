import User from "../model/user.js";

export const getUser = async(req,res) => {
    let userId = req.id;
    try {
        if(userId){
            const user = await User.findById(userId).select("-password");
            if(user){
                return res.json({user : user})
            }else{
                return res.json("user not found in db")
            }
        }else{
            return res.json("UserId not found")
        }
    } catch (error) {
        console.log(error)
    }
}

