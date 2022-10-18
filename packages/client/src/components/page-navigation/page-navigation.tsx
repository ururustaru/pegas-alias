/**
 * Данный компонент является вспомогательным для навигации по экранам вёрстки
 * TODO: Удалить после реализации вёрстки всех экранов
 */
import { Link } from 'react-router-dom'
import { useToggle } from '../../services/hooks';
import './page-navigation.scss';

export function PageNavigation(): JSX.Element {
  const [value, valueToggle] = useToggle(true);

  const links = [
    { link: '/', text: 'Главная' },
    { link: '/login', text: 'Авторизация' },
    { link: '/sign-up', text: 'Регистрация' },
    { link: '/profile', text: 'Профиль' },
    { link: '/change-password', text: 'Смена пароля' },
    { link: '/rules', text: 'Правила' },
    { link: '/leaders', text: 'Лидеры' },
    { link: '/forum', text: 'Форум' },
    { link: '/forum-detail', text: 'Форум детально' },
    { link: '/round-start', text: 'Начало игры' },
    { link: '/round-process', text: 'Раунд: Процесс' },
    { link: '/round-end', text: 'Раунд: Итог' },
    { link: '/score-in-round', text: 'Таблица между раундами' },
    { link: '/winner', text: 'Победители' },
    { link: '/500', text: '500' },
    { link: '/qwqqwwq', text: '404' },
  ];

  return (
    <>
      {value &&
        <nav className="page-navigation">
          <Links list={links} />
          <svg onClick={valueToggle}
            className="page-navigation__close"
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L12 12M12 12L19 19M12 12L19 5M12 12L5 19" stroke="#3B4F7D" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </nav>
      }
    </>

  )
}

const Links = ({ list }: any) => {
  return (
    <ul>
      {list &&
        list.map((x: any) => {
          return (
            <li key={x.link} className="page-navigation__item">
              <Link className="page-navigation__link" to={x.link} >{x.text}</Link>
            </li>
          );
        })
      }
    </ul>
  )
}

