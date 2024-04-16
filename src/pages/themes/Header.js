import {useNavigate} from "react-router-dom";
import Logo from "../../assests/VC.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showSuccessMessage } from "../../utils/notification";

const Header = () => {
    const navigate =useNavigate();
  const logout = () => {
    showSuccessMessage('Logout successful');
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
