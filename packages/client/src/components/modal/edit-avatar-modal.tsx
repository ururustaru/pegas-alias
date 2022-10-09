import React, { useRef, useState } from 'react';
import { Button } from '../../components';
import { Modal } from './modal';
import './modal.scss';
import './../../scss/form/form.scss';

interface IModal {
  isOpen: boolean;
  close: () => void
}

export function EditAvatarModal(props: IModal) {

  const [name, setValue] = useState<string>();

  const changeFileName = (name: string) => {
    setValue(name);
  }
  const inputRef: any = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    changeFileName(fileObj.name);

  };

  return (
    <Modal isOpen={props.isOpen} close={props.close}>
      <h1 className="avatar-title">Поменять аватар</h1>
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />

      <Button
        events={{
          onClick: handleClick
        }}

        classes="button--light mb-28"
        type='button'
        text="Выберите файл"
      />
      <Button
        classes="mb-28"
        text="Сохранить"
        type="submit"
      />
      <p>{name ?? "Файл не выбран"}</p>
    </Modal>

  )
}


