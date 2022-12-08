import express from 'express'
import { createNewComment, deleteCommentById } from '../controllers/commentsController'

const router = express.Router()

// Создание комментария
router.post('/', createNewComment)

// Удаление комментария
router.delete('/:id', deleteCommentById)

export default router;
