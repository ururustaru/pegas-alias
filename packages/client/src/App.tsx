import {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PageNavigation from './components/page-navigation/page-navigation';
import Main from './pages/main';
import Login from './pages/login/login';

import './scss/style.scss';

function App() {
  useEffect(() => {
    // Предустановка я.практикум:
    // const fetchServerData = async () => {
    //   const url = `http://localhost:${__SERVER_PORT__}`
    //   const response = await fetch(url)
    //   const data = await response.json()
    //   console.log(data)
    // }
    //
    // fetchServerData()
  }, [])
  return <div className="app">
    <Router>
      <PageNavigation/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  </div>
}

export default App
