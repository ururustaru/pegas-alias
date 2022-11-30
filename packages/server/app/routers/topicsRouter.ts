import express from 'express'
import { createTopic, getTopicById, getTopics } from '../controllers/topicsControllers'

const router = express.Router();

// Получение темы по Id
router.get('/:id', getTopicById)

// Получение списка всех тем
router.get('/', getTopics)

// Создание новой темы
router.post('/', createTopic)

export default router;
