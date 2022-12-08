import React, { useEffect } from 'react'
import { BackLink, ForumBody, Comment, CommentField } from '../components'
import './../components/forum/forum.scss'
import { useAppDispatch } from '../services/hooks'
import { useQueryParams } from '../services/hooks/useQueryParams'
import { getTopicApi } from '../services/store/topic'
import { useSelector } from 'react-redux'
import { RootState } from '../services/store/reducer'
import { ITopic } from '../services/store/topic/type'


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
      <main className="forum">
        <div className="forum__body">
          <ForumBody {...topic} />
          <div className="forum__comments">
            {topic.Comments && 
              topic.Comments.map(comment => { if (!comment.bind_comment_id) {
                return <Comment {...comment} key={comment.comment_id} />
              }                
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
