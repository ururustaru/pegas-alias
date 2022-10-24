import React from 'react';
import { useToggle } from "../../services/hooks";
import { TEvents } from '../../types/common';
import {CommentField} from '../comment-field/comment-field';
import sticker from './../../assets/images/sticker-example.png';

import './comment.scss';

interface IComment {
  name: string;
  text: string;
  sticker?: string;
  id?: number;
  classes?: string;
  isMine?: boolean;
  likes?: number;
  isLiked?: boolean;
  createDate?: string;
  replies?: IComment[];
  events?: TEvents;
}

export function Comment(props: IComment) {
  const [commentOpen, toggleField] = useToggle();
  
  return (
    <div className="comment">
      <div className="comment__header">
        <span className="comment__author">{props.name}</span>
        <span className="comment__date">{props.createDate}</span>
      </div>
      <div className="comment__body">
        {/* TODO: Заменить на реальный url стикера в src, когда будут реальные данные */}
        {props.sticker && <p className="comment__sticker">
          <img className="comment__sticker-image" alt="Стикер" src={sticker}/>
        </p>}
        {!props.sticker && <p className="comment__text">{props.text}</p>}
        <div className="comment__actions">
          {!commentOpen &&
            <div className="comment__links">
              <button className="comment__link" type="button" onClick={toggleField}>Ответить</button>
              {props.isMine && <button className="comment__link comment__link--alert" type="button">Удалить</button>}
            </div>
          }
          {commentOpen &&
            <div className="comment__form">
              <CommentField />
            </div>
          }
          <div className="comment__likes">
            <span className={props.isLiked ? 'comment__like-icon comment__like-icon--liked' : 'comment__like-icon'}/>
            <span className="comment__likes-count">{props.likes}</span>
          </div>
        </div>

        {props.replies && <div className="comment__replies">
          {props.replies.map(comment => {
            return <Comment {...comment} key={comment.id}/>
          })}
        </div>}
      </div>
    </div>
  )
}


