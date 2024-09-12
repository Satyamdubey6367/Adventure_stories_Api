import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoryDetail from './components/StoryDetail';
import Home from './components/Home';
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/story/:id" element={<StoryDetail/>} />
            </Routes>
        </Router>
    );
}

export default App;
