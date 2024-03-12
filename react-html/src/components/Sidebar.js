import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            {/* Start Sidebar */}
            <aside className="sidebar">
                <a onClick={e => e.preventDefault()} href="-" title="DYW" className="logo">
                    <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="DYW" className="d-block" />
                </a>
                {/* Main Navigation */}
                <nav className="main-navigation" only-arrow-click="false" animation-speed="300" scroll-bg="#c3c3c3" scroll-color="#a1a1a1" scroll-width="5">
                    <ul>
                        <li className="active">
                            <Link to="/Dashboard" title="Dashboard">
                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-dashboard.svg'} alt="Dashboard" />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Innerpage" title="Mailbox">
                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-mailbox.svg'} alt="Mailbox" />
                                <span>Mailbox</span>
                            </Link>
                        </li>
                        <li>
                            <a onClick={e => e.preventDefault()} href="-" title="Setting">
                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-setting.svg'} alt="Setting" />
                                <span>Setting</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={e => e.preventDefault()} href="-" title="Documents">
                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-document.svg'} alt="Documents" />
                                <span>Documents</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={e => e.preventDefault()} href="-" title="Folder">
                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-folder.svg'} alt="Folder" />
                                <span>Folder</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={e => e.preventDefault()} href="-" title="Help">
                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-about.svg'} alt="Help" />
                                <span>Help</span>
                            </a>
                        </li>
                        <li>
                            <a onClick={e => e.preventDefault()} href="-" title="Statement">
                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-statement.svg'} alt="Statement" />
                                <span>Statement</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="menu-overlay" onClick={() => {
                    document.body.classList.remove('menu-open');
                    document.body.classList.remove('show-search');
                }}></div>
                {/* End Main Navigation */}
            </aside>
            {/* End Sidebar */}
        </>
    );
};

export default Sidebar;