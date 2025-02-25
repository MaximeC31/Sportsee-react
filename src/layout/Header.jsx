const NavBar = () => {
  return (
    <nav className="header__nav">
      <ul className="header__nav__list">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.svg" alt="logo" />
      <NavBar />
    </header>
  );
};

export default Header;
