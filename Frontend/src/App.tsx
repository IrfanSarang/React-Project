import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';

const App :React.FC = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Users />} />
      <Route path='*' element={<Navigate to='/' replace />} />
      <Route path='/places/new' element={<NewPlaces />} />
    </Routes>
  </Router>
}

export default App;
