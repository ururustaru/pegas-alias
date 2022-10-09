import React, { useRef, useState } from "react";
import { useToggle } from "../../services/hooks";
import { EditAvatarModal } from "../index";

import './avatar.scss';
import logo from './../../assets/images/logo-round-shadow.png';
import editIcon from './../../assets/images/Edit.svg';

export const Avatar: React.FC = (): JSX.Element => {

  const [value, toggleValue] = useToggle();

  return (
    <>
      <div className="avatar">
        <div className="avatar-image">
          <img src={logo} alt="" />
        </div>
        <div onClick={toggleValue} className="avatar-edit">
          <img src={editIcon} alt="" />
        </div>
      </div>
      <EditAvatarModal isOpen={value} close={toggleValue} />
    </>

  )
}