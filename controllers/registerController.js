import Joi from 'joi'
import { User } from '../models'
import Jwt from 'jsonwebtoken'

const registerController = {
    async register (req, res, next){
        //Checklists
        // [-] Validations 
        const registerSchema = Joi.object({
            name : Joi.string().min(3).max(30).required(),
            email : Joi.string().email().required(),
            password : Joi.string().required(),
            requiredPassword : Joi.ref('password')
        })
        
        const {error} = registerSchema.validate(req.body)
        // console.log(error)
        if(!error){
            const exist = await User.exists({email : req.body.email});
            if(exist)
                res.status(402).send('Email Already Exist');
            else{
                await User.insertMany(req.body);
                res.status(200).send('User Registered Successfully')
            }
        } else {
            res.status(423).send('All valid field required')
        }
        
    },

    async login (req, res, next){
        // console.log(req.body)
        let {email, password} = req.body;
        const loginSchema = Joi.object({
            email : Joi.string().email().required(),
            password : Joi.string().required(),
        })
        
        const {error} = loginSchema.validate(req.body)
        if(error){
            res.status(403).send('Valid data required');
        } else {
            let data = await User.find({email : req.body.email});
            if(!data.length){
                res.status(404).send('User doesnt exists');
            } else {
                let {email, password} = data[0];
                // console.log(email, password);

                const temp = {
                    'email' : String(email),
                    "password" : String(password)
                }
                let access_token = Jwt.sign(temp, process.env.JWT_ACCESS_KEY);
                let refresh_token = Jwt.sign(temp, process.env.JWT_REFRESH_KEY);

                // let token = Jwt.sign(data, process.env.JWT_ACCESS_KEY);
                res.send({access_token : access_token, refresh_token : refresh_token});
            }
        }
    }
}

export default registerController;