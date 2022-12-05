import React, { useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './services/store/reducer'
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
  GameStart,
  ForumDetail,
  ServerErrorPage,
  RoundProcess,
  WinnerPage,
  NotFoundPage,
  RoundEnd,
} from './pages'
import { PageNavigation, FullscreenBtn } from './components'

import './scss/style.scss';
import { getUserApi } from './services/store/user';
import { Descriptions } from './components';

export const App: React.FC = () => {
//  export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserApi());
  }, [dispatch]);

  // Set correct app min-height on mobile for existing browser address bar
  const calcAppHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
  calcAppHeight();
  return (
    <div className="app">
      <Provider store={store}>
      <Router>
        <FullscreenBtn />
        <Descriptions />
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
          <Route path="/game-start" element={<GameStart />} />
          <Route path="/forum-detail" element={<ForumDetail />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="/round-process" element={<RoundProcess />} />
          <Route path="/winner" element={<WinnerPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/round-process" element={<RoundProcess />} />
          <Route path="/round-end" element={<RoundEnd />} />
        </Routes>
      </Router>
      </Provider>
      </div>
  )
}
