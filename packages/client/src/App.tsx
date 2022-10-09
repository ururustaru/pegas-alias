
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Login, SignUp, NewGame, Profile, Rules, Leaders, Round, ChangePassword, ForumPage } from './pages/index';


import './scss/style.scss';
import { getUserAPI } from './services/http/profile';
import { getUser } from './services/store/userSlice';
import PageNavigation from './components/page-navigation/page-navigation';
import { ForumDetail } from './pages/forum-detail';
import { NotFoundPage } from './pages/not-found';
import { RoundEnd } from './pages/round-end';
import { RoundProcess } from './pages/round-process';
import { RoundStart } from './pages/round-start';
import { ScoreInRoundPage } from './pages/score-in-round';
import { ServerErrorPage } from './pages/server-error';
import { WInnerPage } from './pages/winner';

import './scss/style.scss'


export function App() {
  const dispatch = useDispatch();
  getUserAPI().then(data => dispatch(getUser(data)))

  // useEffect(() => {
  //   // Предустановка я.практикум:
  //   // const fetchServerData = async () => {
  //   //   const url = `http://localhost:${__SERVER_PORT__}`
  //   //   const response = await fetch(url)
  //   //   const data = await response.json()
  //   //   console.log(data)
  //   // }
  //   //
  //   // fetchServerData()
  // }, [])

  // return <div className="app">
  //   <Router>
  //     <PageNavigation />
  //     <Routes>

  //       <Route path="/" element={<Main />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/sign-up" element={<SignUp />} />
  //       <Route path="/profile" element={<Profile />} />
        
  //       <Route path="/about" element={<Login />} />
  //       <Route path="/new-game" element={<NewGame />} />
  //       <Route path="/rules" element={<Rules />} />
  //       <Route path="/leaders" element={<Leaders />} />
  //       <Route path="/forum" element={<Forum />} />
  //       <Route path="/round" element={<Round />} />

  //     </Routes>
  //   </Router>
  // </div>

  return (
    <div className="app">
      <Router>
        <PageNavigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<Login />} />
          <Route path="/new-game" element={<NewGame />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/round" element={<Round />} />
          <Route
            path="/score-in-round"
            element={
              <ScoreInRoundPage
                numberRound={1} //Данные указаны для примера использования
                nextNameTeam={'Настольные монстры'}
                arrayScoreTeams={[
                  { id: '1', nameTeam: 'Мудрые черепахи', scoreTeam: 15 },
                  { id: '2', nameTeam: 'Настольные монстры', scoreTeam: 0 },
                  { id: '3', nameTeam: 'Девочки', scoreTeam: 0 },
                ]}
              />
            }
          />
          <Route path="/game" element={<RoundProcess />} />
          <Route path="/round-start" element={<RoundStart />} />
          <Route path="/forum-detail" element={<ForumDetail />} />
          <Route path="/505" element={<ServerErrorPage />} />
          <Route path="/round-process" element={<RoundProcess />} />
          <Route
            path="/winner"
            element={
              <WInnerPage nameWinnerTeam="Мудрые черепахи" score="100:91:56" /> //Здесь пропсы указаны для примера
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        <Route path="/round-start" element={<RoundStart />} />
        <Route path="/round-process" element={<RoundProcess />} />
        <Route path="/round-end" element={<RoundEnd />} />
        </Routes>
      </Router>
    </div>
  )
}
