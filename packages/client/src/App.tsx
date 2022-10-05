// import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageNavigation from './components/page-navigation/page-navigation'
import {
  Main,
  Login,
  SignUp,
  NewGame,
  Profile,
  Rules,
  Leaders,
  ForumPage,
  Round,
  RoundStart,
  RoundProcess,
  ForumDetail,
  NotFoundPage,
  ServerErrorPage,
  WInnerPage,
} from './pages/'

import './scss/style.scss'

export function App() {
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
          <Route path="/rules" element={<Rules />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/round" element={<Round />} />
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
        </Routes>
      </Router>
    </div>
  )
}

