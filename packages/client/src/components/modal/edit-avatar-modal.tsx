import React, { RefObject, useRef, useState } from 'react'
import { Button } from '../../components'
import { Modal } from './modal'
import './../../scss/form/form.scss'

interface IModal {
  isOpen: boolean
  close: () => void
}

export function EditAvatarModal(props: IModal) {
  const [name, setValue] = useState<string>()

  const changeFileName = (name: string) => {
    setValue(name)
  }

  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0]
    if (!fileObj) {
      return
    }
    changeFileName(fileObj.name)
  }

  return (
    <Modal isOpen={props.isOpen} close={props.close}>
      <h1 className="avatar__title">Поменять аватар</h1>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />

      <Button
        events={{
          onClick: handleClick,
        }}
        classes="button--light mb-28"
        type="button"
        text="Выберите файл"
      />
      <Button classes="mb-28" text="Сохранить" type="submit" />
      <p>{name ?? 'Файл не выбран'}</p>
    </Modal>
  )
}
