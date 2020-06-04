
module.exports = (req,res,next) => {
    res.header("Acess-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,PATCH,OPTIONS");
    res.header("Acess-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
}