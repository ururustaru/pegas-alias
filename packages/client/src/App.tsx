// import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNavigation from './components/page-navigation/page-navigation';
import {Main, Login, SignUp, NewGame, Profile, Rules, Leaders, ForumPage, Round, ForumDetail, RoundStart, RoundProcess} from './pages/';

import './scss/style.scss';

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
  return <div className="app">
    <Router>
      <PageNavigation />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/about" element={<Login/>}/>
        <Route path="/new-game" element={<NewGame/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/leaders" element={<Leaders/>}/>
        <Route path="/forum" element={<ForumPage/>}/>
        <Route path="/round" element={<Round />} />
        <Route path="/forum-detail" element={<ForumDetail />}/>
        <Route path="/round-start" element={<RoundStart />} />
        <Route path="/round-process" element={<RoundProcess />} />
      </Routes>
    </Router>
  </div>
}

