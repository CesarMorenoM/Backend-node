import {Router} from 'express'
import {getUsers,adduser}from '../controllers/runners'
const router = Router()

router.get('/',getUsers)
router.post('/',adduser)
export default router