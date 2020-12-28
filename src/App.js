import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import SearchPage from './components/SearchPage/SearchPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/video/:videoId'>
            <div className='app__mainpage'>
              <VideoPlayer />
            </div>
          </Route>
          <Route path='/search/:searchQuery'>
            <div className='app__mainpage'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path='/'>
            <div className='app__mainpage'>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
