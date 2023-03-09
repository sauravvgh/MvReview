//creating user
//req has information coming from the front end user
exports.create = (req, res)=>{
    console.log(req.body);
    res.json({user: req.body})
}

