const {fetchGurus, fetchGuru} =require("../controller/gurus")
const router=require("express").Router()
router.get("/", fetchGurus)
router.get("/:id", fetchGuru)
module.exports=router