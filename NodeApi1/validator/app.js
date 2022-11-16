exports.createPostValidator = (req,res,next)=>{
    //title
    req.check('title','write a title').notEmpty()
    req.check('title','Title must between 4 to 150 chars').isLength({
        min:4,
        max:150
    })
    //body
    req.check('body','write a body').notEmpty()
    req.check('body','Body must between 4 to 150 chars').isLength({
        min:4,
        max:2000
    })
    //check for errors
    const errors = req.validationErrors()
    // if error show the first one as they happen
    if(errors) {
        const firstError = errors.map((error)=> error.msg)[0]
        return res.status(400).json({error: firstError})  
    }
    //proceed to next middleware
    next()
}