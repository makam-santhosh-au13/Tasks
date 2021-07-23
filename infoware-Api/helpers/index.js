exports.createPostValidator = ()=>{
    //Name
    res.check("Name","Name is required").notEmpty();
    res.check("Name","Name Must be between 4 to 150 characters").isLength({
        min:4,
        max:150
    });
    //Description
    res.check("Description","Description is required").notEmpty();
    res.check("Description","Description Must be between 4 to 150 characters").isLength({
        min:4,
        max:150
    });

    const errors = req.validationErrors();
    // if Errors show the first one as they happen
    if(erros) {
        const firstError =errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }

    next();
    
}