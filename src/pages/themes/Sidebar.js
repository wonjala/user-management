import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="sidebar child">
       
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/UserManagement">User Management</Link>
        </li>
        <li>
          <Link to="/FAQ">FAQ</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
