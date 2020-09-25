const Header = () => {
  return (
    <>
      <header id="nav">
        <div className="container">
          <div className="content">
            <span className="logo">
              <a style={{ color: "#000", textDecoration: "none" }} href="/">
                FikraCamps
              </a>{" "}
            </span>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
