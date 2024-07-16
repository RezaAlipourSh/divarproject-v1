const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.DBURL).then(() => console.log("db Connected Successfully")).catch(err => {
    console.log(err?.message ?? "Failed DB Connection")
})
