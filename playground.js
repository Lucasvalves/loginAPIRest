const jwt = require('jsonwebtoken');

const { JsonWebTokenError } = require("jsonwebtoken")

const user = {
    id: "20",
    name: "João",
    username: "João@gamil.com",
    passoword: "123457"
}
const secret = "piohjrmht~s~hdgçhmdçsg"

function creatToken (){
    const token = jwt.sign({id:user.id, username:user.username},secret,{expiresIn: 60})
    console.log(token)
}

function testToken(token) {
   

try {
    const valiData = jwt.verify(token, secret)
    console.log(valiData);
} catch (error) {
    console.log(error);
}
    
}

testToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJKb8Ojb0BnYW1pbC5jb20iLCJpYXQiOjE2NTg3NjEzNTUsImV4cCI6MTY1ODc2MTQxNX0.SHWOOs9-GYM8CTCTVEszWEqaOmISWbPAfM0u5qYfV6M");



