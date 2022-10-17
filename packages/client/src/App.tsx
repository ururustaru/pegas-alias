import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Main, Login, SignUp, NewGame, Profile, Rules, Leaders,
  ChangePassword, ForumPage, ScoreInRoundPage,
  RoundStart, ForumDetail, ServerErrorPage, RoundProcess,
  WinnerPage, NotFoundPage, RoundEnd
} from './pages';

import { PageNavigation } from './components';

import { getUserAPI } from './services/http/profile';
import { getUser } from './services/store/userSlice';

import './scss/style.scss';


export function App() {
  const dispatch = useDispatch();
  getUserAPI().then(data => dispatch(getUser(data)))

  return (
    <div className="app">
      <Router>
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
          <Route path="/round-start" element={<RoundStart />} />
          <Route path="/forum-detail" element={<ForumDetail />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="/round-process" element={<RoundProcess />} />
          <Route path="/winner" element={<WinnerPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/round-start" element={<RoundStart />} />
          <Route path="/round-process" element={<RoundProcess />} />
          <Route path="/round-end" element={<RoundEnd />} />
        </Routes>
      </Router>
    </div>
  )
}
