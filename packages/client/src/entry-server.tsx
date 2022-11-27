import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import store from './services/store/reducer'
import { StaticRouter } from "react-router-dom/server";
import {
    Main,
    GameStart,
    Login,
    SignUp,
    NewGame,
    Profile,
    Rules,
    Leaders,
    ChangePassword,
    ForumPage,
    ScoreInRoundPage,
    ForumDetail,
    ServerErrorPage,
    RoundProcess,
    WinnerPage,
    NotFoundPage,
    RoundEnd,
  } from './pages'
  import { PageNavigation, FullscreenBtn } from './components'

  import './scss/style.scss';

export const render = (url:string) => {
    let Page:React.FC = Main;
    switch (url) {
        case '/': Page = Main; break;
        case '/login': Page = Login; break;
        case '/sign-up': Page = SignUp;  break;
        case '/new-game': Page = NewGame; break;
        case '/profile': Page = Profile; break;
        case '/change-password': Page = ChangePassword; break;
        case '/rules': Page = Rules; break;
        case '/leaders': Page = Leaders; break;
        case '/forum': Page = ForumPage; break;
        case '/score-in-round': Page = ScoreInRoundPage; break;
        case '/game-start': Page = GameStart; break;
        case '/forum-detail': Page = ForumDetail; break;
        case '/500': Page = ServerErrorPage; break;
        case '/round-process': Page = RoundProcess;break;
        case '/round-end': Page = RoundEnd;break;
        case '/winner': Page = WinnerPage;break;
        default: Page = NotFoundPage; break;
    }
    
    return renderToString (
        <React.StrictMode>
        <div className="app">
        <Provider store= {store}>
        <StaticRouter location={url}>
            <FullscreenBtn />
            <PageNavigation/>
            <Page/>
        </StaticRouter>
        </Provider>
        </div>
        </React.StrictMode>

)}
