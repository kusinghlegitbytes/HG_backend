const HGErrors=require("../util/errorClass")
const sql=require("mssql")
const logger=require("../util/logger")
exports.fetchLocations=async(req, res, next)=>{
    try{
        logger.info(`Request received in controller/location.js fetchLocations(...`)
        const response=await sql.query(`select * from tbl_location`)
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        logger.error(`Error in controller/location.js fetchLocations ${err}`)
        next(err)
    }
}
exports.fetchLocation=async(req, res, next)=>{
    try{
        logger.info(`Request received in controller/location.js fetchLocation(...`)
        const id=req.params.id
        const response=await sql.query(`select * from tbl_location where id=${id}`)
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        logger.error(`Error in controller/location.js fetchLocation ${err}`)
        next(err)
    }
}
exports.fetchLocationsByDisctrict=async(req, res, next)=>{
    try{
        logger.info(`Request received in controller/location.js fetchLocationsByDisctrict(...`)
        const id=req.params.id
        const response=await sql.query(`select * from tbl_location where district_id=${id}`)
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        next(err)
    }
}