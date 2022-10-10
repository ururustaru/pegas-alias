import React from 'react';

import { RoundBoard, BackLink } from '../components';
import './../scss/form/form.scss';

export const RoundEnd: React.FC = (): JSX.Element => {
  
  return (
    <>
    <header>
      <BackLink text="В главное меню"/>
    </header>
    <main>
      <RoundBoard />
    </main>
    </>
  )
}
