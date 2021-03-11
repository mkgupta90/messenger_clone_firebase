import React, { useContext } from 'react';
import {ContextProvider} from '../context/ContextProvider';

const Navbar = () => {

    const {register, user, loader, logout} = useContext(ContextProvider);
    
    // Register
    const userRegister = () => {
        register();
    }

    // LogOut
    const userLogout = () => {
        logout();
    }

    const checkUser = () => {
        return !loader ? (
            user ? (
            <div className="navbar__links">
                <li>
                    <span className="navbar__img">
                        <img src={user.photoURL} alt="user" />
                    </span>
                </li>
                <li>
                <button className="navbar__btn" onClick={userLogout}>Logout</button>
                </li> {" "}
            </div>
         ) : (
            <div className="navbar__links">
                <li>
                       <button className="navbar__btn"
                               onClick={userRegister}>
                         Register with Google
                        </button>
                   </li>
            </div>
          )
         ) : (
            "..."
        );
            
    }

    return (
       <div className="navbar">
           <div className="navbar__container">
               <div className="navabr__logo">Messanger</div>
               {checkUser()}
           </div>
       </div> 
    )
}

export default Navbar


/*

<div className="navbar">
           <div className="navbar__container">
               <div className="navabr__logo">Messanger</div>
               <div className="navbar__links">
                   <li>
                       <span className="navbar__img"></span>
                   </li>
                   <li>
                       <button className="navbar__btn"
                               onClick={userRegister}>
                         Register with Google
                        </button>
                   </li>                   
               </div>
           </div>
       </div>

*/
