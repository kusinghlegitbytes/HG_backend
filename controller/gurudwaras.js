const HGErrors=require("../util/errorClass")
const sql=require("mssql")
const logger=require("../util/logger")
exports.fetchGurudwaras=async (req, res, next)=>{
    try{
        logger.info(`Request received in controller/gurudwara.js fetchGurudwaras(...`)
        const response=await sql.query("select * from tbl_gurudwara")
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        logger.error(`Error in controller/gurudwara.js fetchGurudwaras ${err}`)
        next(err)
    }    
}
exports.fetchGurudwara=async (req, res, next)=>{
    const id=req.params.id
    try{
        logger.info(`Request received in controller/gurudwara.js fetchGurudwara(...`)
        const response=await sql.query(`select * from tbl_gurudwara where id=${id}`)
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        logger.error(`Error in controller/gurudwara.js fetchGurudwara ${err}`)
        next(err)
    }
}