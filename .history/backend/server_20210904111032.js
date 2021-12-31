import express, { application } from 'express'
import cors from 'cor'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.listen(port , () => {
    console.log(`server is running , ${port} `)
})