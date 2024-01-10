import Doctor from '../model/doctors.js'



export const getData = async(req,res)=> {
    let doctorData;
    try {
        doctorData = await Doctor.find({})
        if(!doctorData){
            return res.json("no data found")
        }else{
            return res.json(doctorData)
        }
    } catch (error) {
        console.log(error);
        
    }
}

export const getSingleData = async(req,res) => {
    const {id} = req.body;
    let existing;
    try {
        existing = await Doctor.findById(id);
        if(!existing){
            return res.json("item not found");
        }else{
            return res.json({existing})
        }
    } catch (error) {
        console.log(error);
        return res.json("something went wrong")
    }
}

export const deleteData = async(req,res) => {
    const {id} = req.body;
    try {
        await Doctor.findByIdAndDelete(id);
        return res.json("item deleted sucessfully")
    } catch (error) {
        console.log(error);
        return res.json("something went wrong")
    }
}