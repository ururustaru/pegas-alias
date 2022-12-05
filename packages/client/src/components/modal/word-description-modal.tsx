import { Modal } from './modal'
import DOMPurify from 'dompurify';

interface IModal {
  title: string
  description: string
  isOpen: boolean
  close: () => void
}

import './../word-description/word-description.scss'

export function WordDescriptionModal(props: IModal) {
  const cleanDescription = DOMPurify.sanitize(props.description, {
    USE_PROFILES: { html: true },
  });
  
  return (
    <Modal isOpen={ props.isOpen } close={ props.close }>
      <h2 className="modal__title">{ props.title }</h2>
      <div className="word-description" dangerouslySetInnerHTML={{ __html: cleanDescription }} />
    </Modal>
  )
}
