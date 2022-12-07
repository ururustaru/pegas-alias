import React, { useEffect } from 'react'
import { BackLink, ForumBody, Comment, CommentField } from '../components'
import './../components/forum/forum.scss'

// TODO: [https://pegas-alias.atlassian.net/browse/PEGAS-36] Избавиться от замоканных данных
import { FORUM_STUB } from '../mocks/forum'
import { getForumApi } from '../services/store/forum'
import { useAppDispatch } from '../services/hooks'
import { useQueryParams } from '../services/hooks/useQueryParams'
import { getTopicApi } from '../services/store/topic'
import { useSelector } from 'react-redux'
import { RootState } from '../services/store/reducer'
import { ITopic } from '../services/store/topic/type'

interface IComment {
  id: number,
  name: string,
  text: string,
  sticker: string | HTMLImageElement,
  createDate: string,
  likes: number,
  isMine: boolean,
  isLiked: boolean,
  replies: IComment[]
}

export const ForumDetail: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const query = useQueryParams()
  const topicId = query.get('topic_id') as string
  const topic: ITopic = useSelector((state: RootState) => state.topic.topic)
  useEffect(() => {
      dispatch(getTopicApi(topicId))
  }, [topicId])
  return (
    <>
      <header>
        <BackLink text={topic?.title} />
      </header>
      <main>
        <div className="forum">
          <ForumBody {...topic} />
          <div className="forum__comments">
            {FORUM_STUB.comments &&
              FORUM_STUB.comments.map(comment => {
                return <Comment {...comment} key={comment.id} />
              })}
          </div>
          <div className="forum__footer">
            <CommentField />
          </div>
        </div>
      </main>
    </>
  )
}
