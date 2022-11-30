import { DataType, Model } from 'sequelize-typescript'
import type { ModelAttributes } from 'sequelize/types'

export interface ILike {
  like_id: number,
  author_id: number,
  comment_id: string,
}

export const likeModel: ModelAttributes<Model, ILike> = {
  like_id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  author_id: {
    type: DataType.INTEGER,
    allowNull: false
  },
  comment_id: {
    type: DataType.INTEGER,
    allowNull: false
  }
}
