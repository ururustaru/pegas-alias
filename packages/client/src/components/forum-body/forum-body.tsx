import React from 'react';
interface IForumBody {
  text: string;
  createDate: string;
  updateDate: string;
}
import './forum-body.scss';

export function ForumBody(props: IForumBody) {
  return (
    <div className="forum-body">
      <div className="forum-body__text">
        {props.text}
      </div>
      <div className="forum-body__footer">
        <span className="forum-body__date">Создан {props.createDate}</span>
        <span className="forum-body__date">Обновлен {props.updateDate}</span>
      </div>
    </div>
  );
}
