import type { SequelizeOptions } from 'sequelize-typescript'
import { Sequelize } from 'sequelize-typescript'
import { topicModel } from '../models/topicModel'
import { commentModel } from '../models/commentModel'
import { likeModel } from '../models/likeModel'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env

export const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  username: POSTGRES_USER || 'postgres',
  password: POSTGRES_PASSWORD || 'postgres',
  database: POSTGRES_DB  || 'postgres',
  dialect: 'postgres',
  port: Number(POSTGRES_PORT),
  ssl: false,
  dialectOptions: {},
}

export const sequelize = new Sequelize(sequelizeOptions)

export const Topics = sequelize.define('Topics', topicModel, {})
export const Comments = sequelize.define('Comments', commentModel, {})
export const Like = sequelize.define('Like', likeModel, {})

Topics.hasMany(Comments, {foreignKey: 'topic_id'})

Comments.hasMany(Comments, {foreignKey: 'bind_comment_id'})

Comments.hasMany(Like, {foreignKey: 'comment_id'})


export async function dbConnect() {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ force: true })
    console.log('Connection has been established successfully')
  } catch (e) {
    console.error('Unable to connect to the database: ', e)
  }
}

export function startApp() {
  dbConnect().then(
    () => {
      Topics.create({
        topic_id: 100001,
        title: 'Жульверн',
        question: 'Жужат ли жужилицы жучковые!?',
        author_id: 1001,
        author_name: 'Жучара'
      })
      Topics.create({
        topic_id: 100002,
        title: 'Жылды оха ганкай',
        question: 'Артынге казы  же зе!?',
        author_id: 1002,
        author_name: 'Микоглай'
      })
      Topics.create({
        topic_id: 100003,
        title: 'По фасту',
        question: 'Что по чит кодам, пацантре?',
        author_id: 1003,
        author_name: 'Читерило'
      })

      Comments.create({
        comment_id: 100000001,
        message: 'ты що, Вася, какие Читы??',
        author_id: 1002,
        author_name: 'Микоглай',
        topic_id: 100003
      })
      Comments.create({
        comment_id: 100000002,
        message: 'пароль - рыба - меч',
        author_id: 1005,
        author_name: 'Лол',
        topic_id: 100003
      })
      Comments.create({
        comment_id: 100000003,
        message: 'да нет тут никаких читов',
        author_id: 1006,
        author_name: 'Мозг',
        topic_id: 100003
      })     

      Like.create({
        like_id: 1000000001,
        author_id: 1002,
        comment_id: 100000001,
      })      
      Like.create({
        like_id: 1000000002,
        author_id: 1005,
        comment_id: 100000001,
      })      
      Like.create({
        like_id: 1000000003,
        author_id: 1006,
        comment_id: 100000001,
      })
    }
  )
}
