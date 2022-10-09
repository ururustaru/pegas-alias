import { ReactNode } from 'react';

import './modal.scss';

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
}

export const Modal: React.FC<IModal> = ({ children, isOpen, close }: IModal): JSX.Element => {
  return (
    <>
      {
        isOpen &&
        <div className="modal modal--open">
          <div className="modal__overlay" onClick={close}></div>
          <div className="modal__body">
            <span className="modal__close" onClick={close} />
            {children}
          </div>
        </div>
      }
    </>
  )
}
