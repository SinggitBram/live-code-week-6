const jwt = require('jsonwebtoken')

function authentication (req,res,next){
    let { access_token } = req.headers

    try {
        let decoded = jwt.verify(access_token, process.env.JWT_SECRET)
        req.userData = decoded
        next()
    } catch(err) {

        next(err)
    }


}

module.exports = authentication