import React from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            {/* Start Header */}
            <header className="header clearfix">

                <button type="button" className="nav-icon" onClick={() => {
                    document.body.classList.toggle('menu-open');
                    document.body.classList.remove('show-search');
                }}>
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                </button>
                <ul className="right-section">
                    {/* Start Searchbar */}
                    <li className="search-bar">
                        <div className="search-icon" onClick={() => document.body.classList.toggle('show-search')}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/ic-search.svg'} alt="Search Icon" />
                        </div>
                        <Form.Control type="text" placeholder="Search Here"></Form.Control>
                    </li>
                    {/* End Searchbar */}
                    {/* Start Notification Dropdown */}
                    <Dropdown as="li" className="notification" onToggle={document.body.classList.remove('show-search')}>
                        <Dropdown.Toggle id="dropdownMenuButton" as="button">
                            <img src={process.env.PUBLIC_URL + '/assets/images/ic-bell.svg'} alt="Icon Bell" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu aria-labelledby="dropdownMenuButton" align={"right"}>
                            <h6 className="notification-header">Notifications</h6>
                            <Dropdown.Item onClick={e => e.preventDefault()} href="-">
                                <img src={process.env.PUBLIC_URL + '/assets/images/user-img.png'} alt="User Image1" />
                                <p className="p-0">
                                    <span className="name">Suzzeth Bungaos</span> tagged you and
								18 others in a post
								<span className="time d-block">Oct 3, 2017 9:00 PM</span>
                                </p>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={e => e.preventDefault()} href="-">
                                <img src={process.env.PUBLIC_URL + '/assets/images/user-img.png'} alt="User Image2" />
                                <p className="p-0">
                                    <span className="name">Suzzeth Bungaos</span> tagged you and
								18 others in a post
								<span className="time d-block">Oct 3, 2017 9:00 PM</span>
                                </p>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={e => e.preventDefault()} href="-">
                                <img src={process.env.PUBLIC_URL + '/assets/images/user-img.png'} alt="User Image3" />
                                <p className="p-0">
                                    <span className="name">Suzzeth Bungaos</span> tagged you and
								18 others in a post
								<span className="time d-block">Oct 3, 2017 9:00 PM</span>
                                </p>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={e => e.preventDefault()} href="-">
                                <img src={process.env.PUBLIC_URL + '/assets/images/user-img.png'} alt="User Image4" />
                                <p className="p-0">
                                    <span className="name">Suzzeth Bungaos</span> tagged you and
								18 others in a post
								<span className="time d-block">Oct 3, 2017 9:00 PM</span>
                                </p>
                            </Dropdown.Item>
                            <Dropdown.Item onClick={e => e.preventDefault()} href="-" title="Show All" className="notification-footer">
                                Show All <img src={process.env.PUBLIC_URL + '/assets/images/ic-arrow-down.svg'} className="d-inline-block align-middle" alt="Arrow" />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* End Notification Dropdown */}

                    {/* Start User Dropdown */}
                    <Dropdown className="user" as="li">
                        <Dropdown.Toggle id="dropdownMenuButton1" as="button">
                            <img src={process.env.PUBLIC_URL + '/assets/images/user-img.png'} alt="User Image6" className="align-middle d-inline-block" />
                            <span className="align-middle ">John Smith</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu menuAlign="right">
                            <Dropdown.Item title="Profile">
                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-user.svg'} alt="User Icon" />Profile
                                </Dropdown.Item>
                            <Dropdown.Item title="Setting">
                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-setting-dark.svg'} alt="Setting Icon" />Setting
                                </Dropdown.Item>
                            <Dropdown.Item title="Change Password">
                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-key.svg'} alt="Key Icon" />Change Password
                                </Dropdown.Item>
                            <Link title="Logout" to="/Login" className="dropdown-item">
                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-logout.svg'} alt="Logout Icon" />Logout
                                </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* End Notification Dropdown */}
                </ul>
            </header>
            {/* End Header */}
        </>
    );
};

export default Header;