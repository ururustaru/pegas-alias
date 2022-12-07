import { FormField, Button } from '../../components'
import { Modal } from './modal'

import './../../scss/form/form.scss'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { createNewTopic } from '../../services/http/forum'
import { UserInfo } from '../../types/user'
import { useAppDispatch, useAppSelector } from '../../services/hooks'
import { useNavigate } from 'react-router-dom'
import { createTopicApi, getForumApi } from '../../services/store/forum'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error

interface IModal {
  isOpen: boolean
  close: () => void
}

export function AddForumModal(props: IModal) {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm()
  const user: UserInfo = useAppSelector(state => state.user.user)
  const onSubmit = (data: any) => {
    dispatch(createTopicApi({
      ...data,
      author_id: user.id,
      author_name: user.login
    })).then(() => props.close())
    
  }

  return (
    <Modal isOpen={props.isOpen} close={props.close}>
      <h2 className='modal__title'>Создать тему обсуждения</h2>

      <form onSubmit={handleSubmit(onSubmit)} className='modal__form'>
        <FormField register={register('title')} placeholder='Название темы' />
        <FormField register={register('question')} placeholder='Какой вопрос' />
        <Button
          text='Создать'
          type='submit'
        />
      </form>
    </Modal>
  )
}
