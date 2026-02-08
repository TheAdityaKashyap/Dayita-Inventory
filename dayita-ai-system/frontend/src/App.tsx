import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import './styles/globals.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="main-content">
                    <Sidebar />
                    <Switch>
                        <Route path="/" component={Chat} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;