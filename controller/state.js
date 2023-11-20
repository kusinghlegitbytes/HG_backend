const HGErrors=require("../util/errorClass")
const sql=require("mssql")
const logger=require("../util/logger")
exports.fetchStates=async (req, res, next)=>{
    try{
        logger.info(`Request received in controller/state.js fetchStates(...`)
        const response=await sql.query("select * from tbl_state")
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        logger.error(`Error in controller/state.js fetchStates ${err}`)
        next(err)
    }    
}
exports.fetchState=async (req, res, next)=>{
    const id=req.params.id
    try{
        logger.info(`Request received in controller/state.js fetchState(...`)
        const response=await sql.query(`select * from tbl_state where id=${id}`)
        if(!response){
            throw new HGErrors("No records found", 404)
        }
        delete response.recordsets
        delete response.output
        res.status(200).json({success:true, data:response, message:"Success"})
    }catch(err){
        logger.error(`Error in controller/state.js fetchState ${err}`)
        next(err)
    }
}