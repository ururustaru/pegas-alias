import express from 'express'
import { createNewComment, deleteCommentById } from '../controllers/commentsControllers'
// import * as themeController from '../app/controllers/themeController'

const router = express.Router();

// Создание комментария
router.post('/', createNewComment)

// // Проставление/удаление лайка
// router.put('/:id')

// Удаление комментария
router.delete('/:id', deleteCommentById)

export default router;
