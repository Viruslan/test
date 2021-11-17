import {Router} from 'express'
import {getAll} from '../controllers/products.js'
const router = Router()

router.get('/api/server', getAll)

export default router