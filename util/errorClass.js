class HGErrors extends Error{
    constructor(message, erroCode=500){
        super(message)
        Error.captureStackTrace(this, this.constructor)
        this.name=this.constructor.name
        this.status=erroCode
    }
}
module.exports=HGErrors