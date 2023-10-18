const express = require("express")
require("./db/mongoose")
const bodyParser = require("body-parser")
 
const cors = require("cors")
const teacherRouter = require("./routes/teacher")
const studentRouter = require("./routes/student")
const quizRouter = require("./routes/quiz")
const markRouter = require("./routes/marks")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(teacherRouter)
app.use(quizRouter)
app.use(studentRouter)
app.use(markRouter)

const port = 5000

app.listen(port,()=>{
    console.log("Server is up and running on port "+port)
})
