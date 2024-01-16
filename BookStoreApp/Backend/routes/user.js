

const express = require('express');
const autheticate = require('../middleware/userAuthMiddleware')
const router = express.Router();



router.get('/profile',autheticate,(req,res) =>
{
    const {token} = req.cookies
    // console.log(token);
    if (token) {
    jwt.verify (token, process.env.SECRET_KEY, {}, (err, user) => {
    if(err) throw err;
    res.json(user)
    })
    } else {
    res.json(null)
    }
})


module.exports = router