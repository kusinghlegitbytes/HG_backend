const {fetchLocation, fetchLocations, fetchLocationsByDisctrict}=require("../controller/location")
const router=require("express").Router()
router.get("/", fetchLocations)
router.get("/:id", fetchLocation)
router.get("/district/:id", fetchLocationsByDisctrict)
module.exports=router