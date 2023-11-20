const HGErrors=require("../util/errorClass")
const sql=require("mssql")
const logger=require("../util/logger")
exports.fetchCountries=async (req, res, next)=>{
    try{
        logger.info(`Request received in controller/countries.js fetchCountries(...`)
        const response=await sql.query("select * from tbl_country")
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        logger.error(`Error in controller/countries.js fetchCountries ${err}`)
        next(err)
    }    
}
exports.fetchCountry=async (req, res, next)=>{
    const id=req.params.id
    try{
        logger.info(`Request received in controller/countries.js fetchCountry(...`)
        const response=await sql.query(`select * from tbl_country where id=${id}`)
        if(!response){
            throw new HGErrors("Record not found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        logger.error(`Error in controller/countries.js fetchCountry ${err}`)
        next(err)
    }
}
exports.fetchStatesByCountry=async(req, res, next)=>{
    const country_id=req.params.id
    try{
        logger.info(`Request received in controller/countries.js fetchStatesByCountry(...`)
        const response=await sql.query(`select * from tbl_state where country_id=${country_id}`)   
        if(!response){
            throw new HGErrors("Record not found", 404)
        }  
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})   
    }catch(err){
        logger.error(`Error in controller/countries.js fetchStatesByCountry ${err}`)
        next(err)
    }
}