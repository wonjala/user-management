import {useNavigate} from "react-router-dom";
import Logo from "../../assests/VC.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const navigate =useNavigate();
  const logout = () => {
    toast.success('Logout Success!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      
      });
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
