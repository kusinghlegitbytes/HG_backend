const {fetchDistricts, fetchDistrict, fetchDistrictsByState}=require("../controller/districts")
const router=require("express").Router()
router.get("/", fetchDistricts)
router.get("/:id", fetchDistrict)
router.get("/state/:id", fetchDistrictsByState)
module.exports=router