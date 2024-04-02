import {useNavigate} from "react-router-dom";
import Logo from "../../assests/VC.png"

const Header = () => {
    const navigate =useNavigate();
  const logout = () => {
    localStorage.removeItem('isLogin');
    navigate('/login')
    
  };
  return (
    <header class="child flex">
      <div className="logo">
        <img src={Logo} width="150px" alt=""></img>
        {/* <h2>Virinchi College</h2> */}
      </div>
      <button class="logout" type="button" onClick={logout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
