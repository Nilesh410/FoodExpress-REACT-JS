import { Router } from "express";
import { sample_users } from '../data.js';
import jwt from 'jsonwebtoken';
import { BAD_REQUEST } from "../constants/httpStatus.js";
const router=Router();
//http method post used when we have to pass the data to server
router.post('/login',(req,res)=>{
    //we get the data from url   
    const { email,password }=req.body;
     const user=sample_users.find(
        user => user.email === email && user.password === password
     );
     if(user){ //check user login details present or not 
        res.send(generateTokenResponse(user));
        return;
     }

     res.status(BAD_REQUEST).send('Username or password is invalid');//400
});

const generateTokenResponse=user =>
  {
      const token=jwt.sign({
        id:user.id,
        email:user.email,
        isAdmin:user.isAdmin,
      },
       'someRandomText',
        {expiresIn:'30d',}
        );
      //sign func creating a token, first parameter is 
      //object that will be encoded: id, email, is admin
      //2nd parameter is secreat ad private key random text
      //option : expire in 30 day
      return {
        id:user.id,
        email:user.email,
        name:user.name,
        address:user.address,
        isAdmin:user.isAdmin,
        token,
      };
  };

  export default router;