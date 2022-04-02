import React from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import './Home.css';

function Home () {
  return (
    <div className="home-bg">
      <NavBar />
      <div className="navigation">
        <div className="links">
          <Link className="link" to="/main-quiz">
            Start Game
          </Link>
          <div />
          <Link className="link" to="/add-question">
            Add Questions
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Home;
