const router=require("express").Router()
const {fetchGurudwaras, fetchGurudwara} =require("../controller/gurudwaras")
router.get("/", fetchGurudwaras)
router.get("/:id", fetchGurudwara)
module.exports=router