import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js"
import bcrypt from 'bcryptjs';
import cloudinary from "../lib/cloudinary.js"
export const signup= async(req,res)=>{
    // res.send("signup route")
    const {fullName,email,password} = req.body;
    try {
        if (!fullName || !email || !password) {
  return res.status(400).json({ message: "Please enter all details" });
}
       if(password.length<6)return res.status(400).json({message:"password too short, must be atleast 6 characters"});
       const user = await User.findOne({email})
       if(user)return res.status(400).json({message:"email already exists"});   

       const salt = await bcrypt.genSalt(10);
       const hashedPass= await bcrypt.hash(password,salt);
       const newUser = new User({
        fullName,
        email,
        password:hashedPass,
       })
       if(newUser){
            generateToken(newUser._id,res)
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profilePic:newUser.profilePic,
            });
       }else{
        res.status(400).json({message:"Invalid user data"})
       }
    } catch (error) {
        console.log("error in signup controller",error.message);
        res.status(500).json({message:"Internal Server Error"})
    }
}
export const login = async (req,res)=>{
    const {email,password}=req.body
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message:"Invalid credentials"})
        }
        const isPasscorrect = await bcrypt.compare(password,user.password)
        if(!isPasscorrect){
            return res.status(400).json({message:"Incorrect Password"})
        }
        generateToken(user._id,res)
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilePic:user.profilePic
        })
        
    } catch (error) {
        console.log("error in login controller",error.message);
        res.status(500).json({message:"Internal Server Error"})
    }
}
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 }); 
    res.status(200).json({ message: "Logged out Successfully" });
  } catch (error) {
    console.log("Error in logout controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const updateProfile = async(req,res)=>{
    try {
        const {profilePic}=req.body;
        const userId=req.user._id;
        if(!profilePic){
            return res.status(400).json({message:"Profile pic is required"});
        }
       const uploadResponse= await cloudinary.uploader.upload(profilePic);
       const updatedUser = await User.findByIdAndUpdate(userId,{profilePic:uploadResponse.secure_url},{new:true})
       res.status(200).json(updatedUser)
    } catch (error) {
        console.log("error in updating profile",error);
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const checkAuth = async(req,res)=>{
    
    try{
        if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
        res.status(200).json(req.user);
    }catch(error){
        console.log("error in checkAuth controller",error.message);
        res.status(500).json({message:"Internal server error"})
    }
}