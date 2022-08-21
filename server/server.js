const express = require("express")
const mongoose = require("mongoose")
const route = require('../controller/api')

const app = express()

app.use(express.json())

mongoose.connect(
    process.env.MONGO,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  
  app.use(route)
  
  app.listen(8000, () => {
    console.log("Server is running...")
  })
