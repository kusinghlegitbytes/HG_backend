const HGErrors=require("../util/errorClass")
const sql=require("mssql")
const logger=require("../util/logger")
exports.fetchDistricts=async (req, res, next)=>{
    try{
        logger.info(`Request received in controller/district.js fetchDistricts(...`)
        const response=await sql.query("select * from tbl_district")
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        logger.error(`Error in controller/district.js fetchDistricts ${err}`)
        next(err)
    }    
}
exports.fetchDistrict=async (req, res, next)=>{
    const id=req.params.id
    try{
        logger.info(`Request received in controller/district.js fetchDistrict(...`)
        const response=await sql.query(`select * from tbl_district where id=${id}`)
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        logger.error(`Error in controller/district.js fetchDistrict ${err}`)
        next(err)
    }
}
exports.fetchDistrictsByState=async(req, res, next)=>{
    const country_id=req.params.id
    try{
        logger.info(`Request received in controller/district.js fetchDistrictsByState(...`)
        const response=await sql.query(`select * from tbl_district where state_id=${country_id}`)     
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})   
    }catch(err){
        logger.error(`Error in controller/district.js fetchDistrictsByState ${err}`)
        next(err)
    }
}