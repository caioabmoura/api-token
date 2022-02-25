import sessionsRouter from '@modules/User/routes/sessions.routes'
import userRouter from '@modules/User/routes/users.routes'
import { Router } from 'express'

const routes = Router()

routes.use('/user',userRouter)
routes.use('/sessions', sessionsRouter)

export default routes