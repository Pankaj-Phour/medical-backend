const contactModel = require('../Models/contactModel');

const Contact = async(req,res)=>{
    try{

        const data = req.body;
        console.log(data)
        const dbData = await contactModel.create(data);
        console.log(dbData);
        res.status(200).send({
            code:200,
            error:false,
            message:"User data stored successfully",
            response:dbData
        })
    }
    catch(err){
        res.status(200).send({
            code:400,
            error:true,
            message:err.message,
            response:[]
        })
    }
}

module.exports = Contact;