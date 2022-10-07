import React from 'react';
import {BackLink, Forums} from '../components';

export const ForumPage: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <BackLink text="Форум"/>
      </header>
      <main>
        <Forums/>
      </main>
    </>
  )
}
