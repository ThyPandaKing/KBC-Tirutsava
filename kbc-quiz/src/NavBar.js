import {Link} from 'react-router-dom';

function NavBar () {
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{
          backgroundColor: '#e500fe',
          color: '#f8b81b',
          justifyContent: 'flex-end',
          fontSize: '20px',
          fontFamily: 'sans-serif',
        }}
      >

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

      </nav>

    </div>
  );
}

export default NavBar;
