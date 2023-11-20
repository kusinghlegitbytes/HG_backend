const dotenv=require("dotenv")
const sql=require("mssql")
dotenv.config()
const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER_NAME, // e.g., 'localhost' for a local SQL Server instance
    database: process.env.DB_NAME,
    options: {
        trustServerCertificate: true, // Ignore SSL certificate validation
      },
  };
async function connectToDatabase(){
    try{
        await sql.connect(config)
    }catch(err){
        console.log(`Database connection error: ${err}`)
    }
}
module.exports=connectToDatabase