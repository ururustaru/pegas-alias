import { FC } from 'react'
import {BackLink, NotFound} from '../components'

export const NotFoundPage: FC = () => {
  return (
    <>
      <header>
        <BackLink text="В главное меню"/>
      </header>
      <main>
        <NotFound />
      </main>
    </>
  )
}
