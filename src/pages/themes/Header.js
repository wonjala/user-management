const Header = () => {
  const logout = () => {
    alert("logout");
  };
  return (
    <header class="child flex">
      <div className="logo">
        <h2>Virinchi College</h2>
      </div>
      <button class="logout" type="button" onClick={logout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
