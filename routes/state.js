const {fetchStates, fetchState}=require("../controller/state")
const router=require("express").Router()
router.get("/", fetchStates)
router.get("/:id", fetchState)
module.exports=router