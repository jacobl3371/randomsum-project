import express from "express"
import cors from "cors"

const app = express()

app.use(cors())


app.get("/api/sum1", (req, res) => {
    let randomSum1 = Math.random()
    res.json({randomSum1})
})

app.get("/api/sum2", (req, res) => {
    let randomSum2 = Math.random()
    res.json({randomSum2})
})

app.listen(3000)

export default app