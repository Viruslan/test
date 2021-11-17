import express from 'express'
import path from 'path'
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve()
const PORT = 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'dist')))
app.use(serverRoutes)


app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`)

})

