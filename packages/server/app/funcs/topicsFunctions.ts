import type { ITopic } from '../models/topicModel'
import { Comments, Topics } from '../config/db.config'

// Создание топика
export async function createTopic(props: ITopic) {
  return Topics.create({ ...props })
}

// Получение топика по Id и связанных комментов с топиком
export async function getTopicById(id: number) {
  return Topics.findOne({ 
    where: { 
      topic_id: id 
    },
    include: [
      {
        model: Comments,
        attributes: ['message', 'author_name', 'author_id', 'createdAt', 'updatedAt', 'topic_id'],
      }
    ],
  })
}

type pager = {
  offset?: number
  limit?: number
}

// Получить все топики форума и связанные комменты, для определения последнего

export async function getAllTopics(props: pager) {
  const { offset, limit } = props;
  return Topics.findAndCountAll({
    offset: offset || 0,
    limit: limit || 10,
    include: [
      {
        model: Comments,
        attributes: ['message', 'author_name', 'author_id', 'createdAt', 'updatedAt', 'topic_id'],
      }
    ],
  })
}
