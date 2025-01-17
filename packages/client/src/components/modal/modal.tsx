import { ReactNode } from 'react'

import './modal.scss'

export interface IModal {
  children?: ReactNode
  isOpen: boolean
  close: () => void
  classes?: string
}

export const Modal: React.FC<IModal> = ({
  children,
  isOpen,
  close,
  classes
}: IModal): JSX.Element => {
  return (
    <>
      {isOpen && (
        <div className={classes ? 'modal modal--open ' + classes : 'modal modal--open'}>
          <div className="modal__overlay" onClick={close}></div>
          <div className="modal__body">
            <span className="modal__close" onClick={close} />
            {children}
          </div>
        </div>
      )}
    </>
  )
}
