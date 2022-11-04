import React from 'react'
import {Linktree} from '../components/Linktree'
import Contact from '../components/Contact';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Linktree />} exact/>
            <Route path="/contact" element={<Contact />} exact/>                
        </Routes>    
    </Router>           
)
}

export default App