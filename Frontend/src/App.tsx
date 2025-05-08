import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';


const App: React.FC = () => {
  return <Router>
    <MainNavigation />
    <main>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/:userId/places' element={<UserPlaces />} >
          <Route path=':placeId' />
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
        <Route path='/places/new' element={<NewPlaces />} />
      </Routes>
    </main>
  </Router>
}

export default App;
