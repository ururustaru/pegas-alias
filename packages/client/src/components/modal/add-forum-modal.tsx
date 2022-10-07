import React from 'react';
import {FormField, Button} from '../../components';

import './modal.scss';
import './../form/form.scss';

interface IModal {
  isOpen: boolean;
  closeModal: () => void
}

export function AddForumModal(props: IModal) {
  return (
    <div className={props.isOpen ? 'modal modal--open' : 'modal'}>
      <div className="modal__overlay" onClick={props.closeModal}/>
      <div className="modal__body">
        <span className="modal__close" onClick={props.closeModal}/>
        <h2 className="modal__title">Создать тему обсуждения</h2>

        <form className="modal__form">
          <FormField placeholder="Название темы или вопрос"/>
          <Button
            text="Создать"
            type="button"
            events={{
              onClick: props.closeModal
            }}
          />
        </form>
      </div>
    </div>
  )
}


