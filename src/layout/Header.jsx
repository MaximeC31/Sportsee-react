import { Link, useParams } from 'react-router-dom';

const NavBar = () => {
  const { id } = useParams();
  const userId = id || '12';

  return (
    <nav className="header__nav">
      <ul className="header__nav__list">
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Accueil</Link></li>
        <li><Link to={`/user/${userId}`} style={{ color: 'white', textDecoration: 'none' }}>Profil</Link></li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="header">
      <img src="/Sportsee-react/logo.svg" alt="logo" />
      <NavBar />
    </header>
  );
};

export default Header;
