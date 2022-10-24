import React from 'react';
import {BackLink, ForumBody, Comment, CommentField} from '../components';
import './../components/forum/forum.scss';

// TODO: [https://pegas-alias.atlassian.net/browse/PEGAS-36] Избавиться от замоканных данных
import { FORUM_STUB } from '../mocks/forum';

export const ForumDetail: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <BackLink text="Помогите разобраться с правилами"/>
      </header>
      <main>
        <div className="forum">
          <ForumBody {...FORUM_STUB.subject}/>
          <div className="forum__comments">
            {FORUM_STUB.comments && FORUM_STUB.comments.map(comment => {
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
