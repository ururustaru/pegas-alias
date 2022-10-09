/**
 * Данный компонент является вспомогательным для навигации по экранам вёрстки
 * TODO: Удалить после реализации вёрстки всех экранов
 */
 import {Link} from 'react-router-dom'
 import './page-navigation.scss';
 
 function PageNavigation() {
   function hideMenu(): void {
     document.querySelector('.page-navigation')?.classList.add('visually-hidden')
   }
   
   const links = [ ["/","Главная"], 
                 ["/login", "Авторизация"],
                 ["/sign-up", "Регистрация"],
                 ["/profile","Профиль"],
                 ["/change-password","Профиль"],
                 ["/rules","Правила"],
                 ["/forum","Форум"],
                 ["/round","Раунд"],
                 ["/round-start","Раунд: Начало"],
                 ["/round-process","Раунд: Процесс"],
                 ["/round-end","Раунд: Итог"],
               ];
   
   const rows = [];
   for (let i = 0; i < links.length; i++) {
     
     rows.push(<ListLinks text={links[i][1]} link={links[i][0]} key={i} />);
   }
 
   return (
     <nav className="page-navigation">
       <ul>
       {rows}
       </ul>
       <svg className="page-navigation__close"
         onClick={hideMenu}
         width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M5 5L12 12M12 12L19 19M12 12L19 5M12 12L5 19" stroke="#3B4F7D" strokeWidth="1.8"
           strokeLinecap="round" strokeLinejoin="round"/>
       </svg>
     </nav>
   )
 }
 
 interface IListLinks {
   text?: string;
   link?: string;
 }
 
 function ListLinks(props: IListLinks) {
 
   return (
       <li className="page-navigation__item">
         <Link className="page-navigation__link" to={props.link!}>{props.text}</Link>
       </li>
   )
 }
 
 export default PageNavigation;
