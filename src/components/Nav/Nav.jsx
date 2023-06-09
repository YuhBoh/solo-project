import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import '../Nav/Nav.css';
import { useSelector, useDispatch } from 'react-redux';
import Upload from './Upload/Upload';
import Middle from './Middle/Middle';

function Nav() {
  const user = useSelector((store) => store.user);
  const search = useSelector(store => store.api)
  const [openModal, setOpenModal] = useState(false);

  // FOR MIDDLE SECTION: SEARCHBAR
  const [searchInput, setSearchInput] = useState('');
  // console.log('SEARCHINPUT:', searchInput); WORKS

  return (
    // HEADER
    <div className="header">
      <Link to="/home">
        <div className="left-section">
          <img 
            className="hamburger-menu"
            src={ require("./images/hamburger-menu.png")} alt="hamburger menu" />
          <h2 className="nav-title">Yuh-Tube</h2>
        </div>
      </Link>

    {/* THIS IS THE SEARCH BAR FOR API SEARCHES */}
    < Middle />

      <div className="right-section">
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <div className="upload-icon-container">
              <img onClick ={() => {setOpenModal(true);}}className="upload-icon" src={require("./images/upload.png")} alt="" />
              <div className="tooltip">Create</div>
            </div>
            {openModal && <Upload 
            className="upload-pop"
            closeModal={setOpenModal} />}

            <div className="notifications-icon-container">
              <img className="notifications-icon" src={require("./images/notification.png")} alt=""/>
              <div className="tooltip">Notifications</div>
            </div>

            <Link className="nav-link" to="/info">
              Info Page
            </Link>

            <LogOutButton className="nav-link"/>
          </>
        )}

        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
