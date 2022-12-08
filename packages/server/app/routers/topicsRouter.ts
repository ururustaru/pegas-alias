import express from 'express'
import { createTopic, getTopicById, getTopics } from '../controllers/topicsController'

const router = express.Router();

// Получение списка всех тем
router.get('/', getTopics)

// Получение темы по Id
router.get('/:id', getTopicById)

// Создание новой темы
router.post('/', createTopic)

export default router;
