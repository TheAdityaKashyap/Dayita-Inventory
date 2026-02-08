import React from 'react';
import Chat from '../components/Chat';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const HomePage: React.FC = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
};

export default HomePage;