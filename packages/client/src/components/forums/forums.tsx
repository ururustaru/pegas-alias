import React from 'react';
import {Link} from 'react-router-dom';
import {Button, AddForumModal} from './../../components';

import './forums.scss';

// todo: Заменить на реальные данные
const FORUMS_STUB = [
  {
    title: 'Тактики объяснения',
    description: 'Обсуждаем самые распространённые практики объяснения и отгадывания',
    commentsCount: '12 комментариев',
    lastCommentDate: '20:52',
  },
  {
    title: 'Помогите разобраться с правилами',
    description: 'Как можно залутаться и нормально побегать пострелять ? Это ж стрелялка ?',
    commentsCount: '1 комментарий',
    lastCommentDate: 'Вчера',
  },
  {
    title: 'А можно мальчикам играть против девочек ?',
    description: 'Блин, они всегда выигрывают. Может где-то в правилах прописать ?',
    commentsCount: '1237 комментариев',
    lastCommentDate: '25.09.2022',
  },
  {
    title: 'Тактики объяснения 2',
    description: 'Обсуждаем самые распространённые практики объяснения и отгадывания',
    commentsCount: '12 комментариев',
    lastCommentDate: '20:52',
  },
  {
    title: 'Помогите разобраться с правилами 2',
    description: 'Как можно залутаться и нормально побегать пострелять ? Это ж стрелялка ?',
    commentsCount: '1 комментарий',
    lastCommentDate: 'Вчера',
  },
  {
    title: 'А можно мальчикам играть против девочек 2 ?',
    description: 'Блин, они всегда выигрывают. Может где-то в правилах прописать ?',
    commentsCount: '1237 комментариев',
    lastCommentDate: '25.09.2022',
  }
]

export class Forums extends React.Component {
  state = {
    showModal: false
  }

  showModal = () => {
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  forumsList = FORUMS_STUB.map(forum => {
    return <Link className="forums__item" key={forum.title} to="/forum-detail">
      <span className="forums__item-title">{forum.title}</span>
      <span className="forums__item-desc">{forum.description}</span>
      <div className="forums__item-info">
        <span className="forums__item-info-value">{forum.commentsCount}</span>
        <span className="forums__item-info-value">{forum.lastCommentDate}</span>
      </div>
    </Link>
  })
  
  render() {
    return (
      <div className="forums">
        <header className="forums__header">
          <Button text="Создать тему"
            events={{
              onClick: this.showModal
            }}
          />
        </header>
        <div className="forums__list">
          {this.forumsList}
        </div>
        <AddForumModal isOpen={this.state.showModal} closeModal={this.closeModal}/>
      </div>
    )
  }
}


