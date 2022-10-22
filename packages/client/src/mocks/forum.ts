export const FORUM_STUB = {
  subject: {
    text: 'Привет! Частенько новичку или старичку (всякое бывает) на форуме хочется задать вопрос, на который он не ' +
      'знает ответ. Эта тема создана, чтобы дать ответы на ваши небольшие вопросы, которые не требуют создания ' +
      'отдельной темы. Для завсегдатаев форумов — помогайте ответами на вопросы; я знаю, что многие из вас любят ' +
      'чистоту и порядок. Сделаем мир светлее и добрее.',
    createDate: '15.06.2018',
    updateDate: 'вчера'
  },
  comments: [
    {
      id: 0,
      name: 'bober233',
      text: 'Кто-нибудь знает, когда дадут паки за чемпионат?',
      createDate: '10.09.2022',
      likes: 233,
      isMine: true,
      isLiked: false,
      replies: [
        {
          id: 1,
          name: 'bySalamandra',
          text: 'Приблизительно 2-3 недели с момента завершения чемпионата',
          createDate: '10.09.2022',
          likes: 13,
          isMine: false,
          isLiked: true,
        },
        {
          id: 2,
          name: 'bober233',
          text: 'Когда он закончится + неделя после',
          createDate: '10.09.2022',
          likes: 11,
          isMine: true,
          isLiked: false,
        },
        {
          id: 3,
          name: 'bober233',
          text: 'Но это не точно',
          createDate: '10.09.2022',
          likes: 11,
          isMine: true,
          isLiked: false,
        }
      ]
    },
    {
      id: 6,
      name: 'Alexander',
      text: 'Total commander с 15 попытки таки сохранил, все получилось. Уж не знаю, с чем связано',
      sticker: '../../assets/images/505.png',
      createDate: 'март 2019',
      likes: 0,
      isMine: false,
      isLiked: false
    },
    {
      id: 4,
      name: 'CEH9',
      text: 'Когда будет перенесена тема “Полезные ссылки”? Я на старый форум гайды писал, надо перенести. А если без записи в ссылках сделаю - тут же потеряются.',
      createDate: '3 дня назад',
      likes: 123,
      isMine: false,
      isLiked: false
    },
    {
      id: 5,
      name: 'rikzY',
      text: 'Total commander с 15 попытки таки сохранил, все получилось. Уж не знаю, с чем связано',
      createDate: 'март 2019',
      likes: 0,
      isMine: false,
      isLiked: false
    }
  ]
}
