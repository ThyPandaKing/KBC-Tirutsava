import {Link} from 'react-router-dom';

function NavBar({bg_color}) {
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{
          backgroundColor: bg_color,
          color: '#f8b81b',
          justifyContent: 'space-between',
          fontSize: '20px',
          fontFamily: 'sans-serif',
        }}
      >
        <img
          src="https://tirutsava.in/logodark.png"
          alt="tirutsava"
          style={{height: '50px'}}
        />
        <div>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              margin: '5px',
              padding: '5px',
            }}
          >
            Home
          </Link>

          <Link
            to="/main-quiz"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              margin: '5px',
              padding: '5px',
            }}
          >
            Start Game
          </Link>

          <Link
            to="/add-question"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              margin: '5px',
              padding: '5px',
            }}
          >
            Add Questions
          </Link>
        </div>
      </nav>

    </div>
  );
}

export default NavBar;
