const router=require("express").Router()
const {fetchCountries, fetchCountry, fetchStatesByCountry} =require("../controller/countries")
router.get("/", fetchCountries)
router.get("/:id", fetchCountry)
router.get("/states/:id", fetchStatesByCountry)
module.exports=router