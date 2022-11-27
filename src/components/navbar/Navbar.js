import React from 'react';
import navbar from './Navbar.module.css';

const Navbar = () => (
      <div>
         <img className={navbar.navbar_img} src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" alt="user" />
         <input
                className={navbar.navbar_panel}
                type="text"
                placeholder='Search or start new chat'
            />
       </div>
);

export default Navbar;
