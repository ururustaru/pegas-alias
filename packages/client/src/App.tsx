import { useAppDispatch } from './services/hooks/useState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Main,
  Login,
  SignUp,
  NewGame,
  Profile,
  Rules,
  Leaders,
  ChangePassword,
  ForumPage,
  ScoreInRoundPage,
  RoundStart,
  ForumDetail,
  ServerErrorPage,
  RoundProcess,
  WinnerPage,
  NotFoundPage,
  RoundEnd,
} from './pages'

import { PageNavigation } from './components'

import './scss/style.scss';
import { useEffect } from 'react';
import { getUserApi } from './services/store/user';
import { FullscreenBtn } from './components/fullscreen-btn/fullscreen-btn';

export function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserApi());
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        <FullscreenBtn />
        <PageNavigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/new-game" element={<NewGame />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/score-in-round" element={<ScoreInRoundPage />} />
          <Route path="/forum-detail" element={<ForumDetail />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="/winner" element={<WinnerPage />} />
          <Route path="/round-start" element={<RoundStart />} />
          <Route path="/round-process" element={<RoundProcess />} />
          <Route path="/round-end" element={<RoundEnd />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  )
}
