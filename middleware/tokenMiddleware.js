import Jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
const tokenMiddleware = async(req, res, next)=>{
    let auth = req.headers['authorization'];
    let token = auth && auth.split(' ')[1];
    console.log(token)
    try{
        var decoded =  await Jwt.verify(token,  process.env.JWT_ACCESS_KEY);
        req.email = decoded.email;
        next();
    } catch (error){
        console.log('err', error)
    }
}

export default tokenMiddleware;