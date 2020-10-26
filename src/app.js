import express,{json} from 'express'
import morgan from 'morgan'
import runnerRoutes from './routes/runners'
const app = express()

//get client-request by json
app.use(morgan('dev'))
//remplace body.parse
app.use(json())

//routes
app.use('/api/runners',runnerRoutes)
export default app;