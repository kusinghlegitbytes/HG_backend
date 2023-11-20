const cors=require("cors")
const express=require("express")
const dotenv=require("dotenv")
const connectToDatabase=require("./util/db")
const gurudwaraRoutes=require("./routes/gurudwaras")
const guruRoutes=require("./routes/gurus")
const countryRoutes=require("./routes/countries")
const stateRoutes=require("./routes/state")
const districtRoutes=require("./routes/district")
const locationRoutes=require("./routes/location")
const customErrorMiddleware=require("./middleware/error")
const app=express()
dotenv.config()
connectToDatabase()
app.use(cors())
app.use("/api/v1/gurudwaras", gurudwaraRoutes)
app.use("/api/v1/gurus", guruRoutes)
app.use("/api/v1/countries", countryRoutes)
app.use("/api/v1/states", stateRoutes)
app.use("/api/v1/districts", districtRoutes)
app.use("/api/v1/locations", locationRoutes)
app.use(customErrorMiddleware);
app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Server running at ${process.env.SERVER_PORT}`)
})