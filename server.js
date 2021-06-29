const express = require ('express');
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())


const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]
app.get('/users', function(req,res){
    res.json({
        success: true,
        message:' succesfully got users.',
        users: mockUserData
    })
})


app.get('/users/:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message:'got one user',
        users: req.params.id
    })
})


app.post('/login', function(req, res){
    const username =req.body.username;
    const password = req.body.password;

    const mockUserName = 'billyTheKid';
    const mockPassword = 'superSecret';

    if (username === mockUserName && password===mockPassword){
        res.json({
            success: true,
            message: 'valid password and username',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'invalid password and username'
        })
    }
})


app.listen(8000, function(){console.log("server is running")})