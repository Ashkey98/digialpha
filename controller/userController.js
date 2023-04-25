const { User} = require('../model/userModel');
const mongodb = require("mongodb");


// Register User
exports.registerUser = async(req, res) => {
    console.log(req.body );
    try {
        const user = await new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone
        })
     res.send(user); 
     
     await user.save();
     
         } catch (error) {
             res.send(error);
         }
        
}

exports.getUseById = async(req, res) => {

    try {
        const user = await User.findById(req.params.id);
        res.send(user);
    } catch (error) {
        res.status(401).json({error: err.message});
    }

}

exports.updateProfile = async(req, res, next) => {

  
    try{
      let updatedUser = await User.findByIdAndUpdate(req.params.id,
        {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone : req.body.phone,
        
        },
    
        
        {
          new:true
        }
        );
       
          res.status(200).json(updatedUser);
          console.log("user=====",updatedUser);
  
    }catch(err){
      console.log(err);
      res.status(500).json({error: err.message});
    }

  }

  exports.deleteUser = async function(req, res){

    try {
        const result = await User.deleteOne({_id: new mongodb.ObjectId( req.params.id)})
        console.log(result);
    
        res.send(result)
        
    } catch (error) {
        res.send(error.message)
    }

  

  }

  exports.getAllUsers = async function (req, res){

    try {

        const users = await User.find({});

        res.status(200).json({
            success: true,
            users,
          })
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }



  }