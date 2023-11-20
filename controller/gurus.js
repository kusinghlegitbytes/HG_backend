const HGErrors=require("../util/errorClass")
const sql=require("mssql")
const logger=require("../util/logger")
exports.fetchGurus=async (req, res, next)=>{
    try{
        logger.info(`Request received in controller/gurus.js fetchGurus(...`)
        const response=await sql.query("select * from tbl_guru_sahib")
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        logger.error(`Error in controller/gurus.js fetchGurus ${err}`)
        next(err)
    }
}
exports.fetchGuru=async (req, res, next)=>{
    const id=req.params.id
    try{
        logger.info(`Request received in controller/gurus.js fetchGuru(...`)
        const response=await sql.query(`select * from tbl_guru_sahib where id=${id}`)
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        logger.error(`Error in controller/gurus.js fetchGuru ${err}`)
        next(err)
    }    
}