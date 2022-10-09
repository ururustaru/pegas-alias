import { FormField, Button } from '../../components';
import { Modal } from './modal';

import './modal.scss';
import './../../scss/form/form.scss';

interface IModal {
  isOpen: boolean;
  close: () => void
}

export function AddForumModal(props: IModal) {
  return (
    <Modal isOpen={props.isOpen} close={props.close}>
      <h2 className="modal__title">Создать тему обсуждения</h2>

      <form className="modal__form">
        <FormField placeholder="Название темы или вопрос" />
        <Button
          text="Создать"
          type="button"
          events={{
            onClick: props.close
          }}
        />
      </form>
    </Modal>

  )
}





