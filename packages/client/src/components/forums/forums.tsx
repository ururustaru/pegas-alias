import React from 'react'
import { Link } from 'react-router-dom'
import { Button, AddForumModal } from './../../components'
import { useToggle } from '../../services/hooks'
import './forums.scss'

// TODO: [https://pegas-alias.atlassian.net/browse/PEGAS-36] Избавиться от замоканных данных
import { FORUMS_STUB } from '../../mocks/forums'

export const Forums = () => {
  const [value, toggleValue] = useToggle()

  return (
    <div className="forums">
      <header className="forums__header">
        <Button
          text="Создать тему"
          events={{
            onClick: () => {
              toggleValue()
            },
          }}
        />
      </header>
      <div className="forums__list">
        {FORUMS_STUB.map(forum => {
          return (
            <Link className="forums__item" key={forum.title} to="/forum-detail">
              <span className="forums__item-title">{forum.title}</span>
              <span className="forums__item-desc">{forum.description}</span>
              <div className="forums__item-info">
                <span className="forums__item-info-value">
                  {forum.commentsCount}
                </span>
                <span className="forums__item-info-value">
                  {forum.lastCommentDate}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
      <AddForumModal isOpen={value} close={toggleValue} />
    </div>
  )
}
