const express = require("express")
const mongoose = require("mongoose")
const route = require('../controller/api')

const app = express()

app.use(express.json())

mongoose.connect(
    "***REMOVED***",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  
  app.use(route)
  
  app.listen(3000, () => {
    console.log("Server is running...")
  })