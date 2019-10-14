import React from 'react';
import GoodsContainer from './containers/GoodsContainer';
import './App.scss';

export default function App() {
  return (
    <div className="main-wrap">
      <div className="custom-container">
        <header className="header">
          Header
        </header>
      </div>
      <main className="main">
        <div className="custom-container">
          <GoodsContainer />
        </div>
      </main>
      <div className="custom-container">
        <footer className="footer">
          Footer
        </footer>
      </div>
    </div>
  );
}
