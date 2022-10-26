import React from 'react'
import { BackLink, NotFound } from '../components'

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <header>
        <BackLink text="В главное меню" />
      </header>
      <main>
        <NotFound />
      </main>
    </>
  )
}
