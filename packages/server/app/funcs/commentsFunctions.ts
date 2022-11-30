
import type { IComment } from '../models/commentModel'
import { Comments, Like, Topics } from '../config/db.config'

// Создание комментария
export async function createComment(props: IComment) {
  return Comments.create({ ...props })
}

// Удаление комментария по ID
export async function deleteComment(id: number) {
  return Comments.destroy({ 
    where: { comment_id: id } 
  })
}

// // Поиск всех комментариев топика по ID топика и всех связанных лайков
// export async function getCommentsByTopicId(id?: number) {
//   return Comments.findAll({
//     where: { topic_id: id },
//     include: [
//       {
//         model: Like,
//         attributes: ['author_id'],
//       }
//     ],
//   })
// }
//
// // поиск всех комментариев комментария по ID комментария
// export async function getCommentsByCommentId(id?: number) {
//   return Comments.findAll({
//     where: { id },
//     include: [
//       {
//         model: Topics
//       },
//     ],
//   })
// }
