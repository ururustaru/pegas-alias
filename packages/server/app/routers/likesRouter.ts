import express from 'express'
import { createNewLike, deleteLikeById } from '../controllers/likeController'

const router = express.Router();

// Создание лайка
router.post('/', createNewLike)

// Удаление лайка
router.delete('/:id', deleteLikeById)

export default router
