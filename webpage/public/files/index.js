import ReactDOM from "react-dom";
import React, {Component} from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from '/components/pages/Home.js'
import AnD from '/components/pages/AnD.js'

export default function App() {
        return(
            <Router>
                <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/AnD' element={< AnD />}></Route>
                </Routes>
            </Router>
        )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);