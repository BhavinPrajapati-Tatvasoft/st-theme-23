import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Dropdown, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>{'Admin Theme | Dashboard'}</title>
            </Helmet>
            <div className="wrapper">
                {/* Start Header */}
                <Header />
                {/* End Header */}

                {/* Start Sidebar */}
                <Sidebar />
                {/* End Sidebar */}

                {/* Main Content */}
                <main className="main-content">
                    <h4 className="main-heading">Dashboard</h4>

                    {/* Start Main Link Section */}
                    <div className="main-link-section row no-gutters">
                        <a onClick={e => e.preventDefault()} href="-" className="col-lg col-md-4 col-sm-6">
                            <p>20.5k</p>
                            <span>Views</span>
                        </a>
                        <a onClick={e => e.preventDefault()} href="-" className="col-lg col-md-4 col-sm-6">
                            <p>14.5k</p>
                            <span>Reads</span>
                        </a>
                        <a onClick={e => e.preventDefault()} href="-" className="col-lg col-md-4 col-sm-6">
                            <p>203</p>
                            <span>Recommends</span>
                        </a>
                        <a onClick={e => e.preventDefault()} href="-" className="col-lg col-md-4 col-sm-6">
                            <p>976</p>
                            <span>Visitors</span>
                        </a>
                        <a onClick={e => e.preventDefault()} href="-" className="col-lg col-md-4 col-sm-6">
                            <p>576</p>
                            <span>Repeat Visitors</span>
                        </a>
                        <a onClick={e => e.preventDefault()} href="-" className="col-lg col-md-4 col-sm-6">
                            <p>2.5k</p>
                            <span>Subscribers</span>
                        </a>
                    </div>
                    {/* End Main Link Section */}

                    {/* Start Line Graph Section */}
                    <div className="line-graph">
                        <img src={process.env.PUBLIC_URL + '/assets/images/line-graph.png'} className="img-fluid d-block mx-auto" alt="Line-graph" />
                    </div>
                    {/* End Line Graph Section */}

                    <div className="row">
                        {/* Start Bar Graph Section */}
                        <div className="col-xl-4 col-lg-6">
                            <div className="card eq-height">
                                <div className="card-header">Users
                                    <Dropdown className="card-menu" menuAlign="right">
                                        <Dropdown.Toggle id="dropdownMenuButton2" as="button">
                                            <span></span>
                                            <span></span>
                                            <span className="mr-0"></span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu aria-labelledby="dropdownMenuButton2">
                                            <Dropdown.Item title="Edit">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-edit.svg'} alt="Edit Icon" />Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item title="Delete">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-delete.svg'} alt="Delete Icon" />Delete
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="card-body">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/bar-graph.png'} className="img-fluid mx-auto d-block" alt="Bar Graph" />
                                </div>
                            </div>
                            {/* End Bar Graph Section */}

                        </div>
                        {/* Start Table Section */}
                        <div className="col-xl-8 col-lg-6">
                            <div className="card eq-height">
                                <div className="card-header">Stories
                                        <Dropdown className="card-menu" menuAlign="right">
                                        <Dropdown.Toggle id="dropdownMenuButton3" as="button">
                                            <span></span>
                                            <span></span>
                                            <span className="mr-0"></span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu aria-labelledby="dropdownMenuButton3">
                                            <Dropdown.Item title="Edit">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-edit.svg'} alt="Edit Icon" />Edit
                                                </Dropdown.Item>
                                            <Dropdown.Item title="Delete">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/ic-delete.svg'} alt="Delete Icon" />Delete
                                                </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="card-body p-0">
                                    <Table className="table data-grid" responsive>
                                        <thead>
                                            <tr>
                                                <th className="text-left">Name</th>
                                                <th>Views</th>
                                                <th>Reads</th>
                                                <th>Read Ratio</th>
                                                <th>Recommend</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="name text-left"><img src={process.env.PUBLIC_URL + '/assets/images/story-img1.png'} alt="Story Image1" />Lorem ipsum is dummy text</td>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>76%</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td className="name text-left"><img src={process.env.PUBLIC_URL + '/assets/images/story-img2.png'} alt="Story Image2" />Lorem ipsum is dummy text</td>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>76%</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td className="name text-left"><img src={process.env.PUBLIC_URL + '/assets/images/story-img3.png'} alt="Story Image3" />Lorem ipsum is dummy text</td>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>76%</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td className="name text-left"><img src={process.env.PUBLIC_URL + '/assets/images/story-img4.png'} alt="Story Image4" />Lorem ipsum is dummy text</td>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>76%</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td className="name text-left"><img src={process.env.PUBLIC_URL + '/assets/images/story-img5.png'} alt="Story Image5" />Lorem ipsum is dummy text</td>
                                                <td>10</td>
                                                <td>5</td>
                                                <td>76%</td>
                                                <td>0</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                        {/* End Table Section */}
                    </div>
                </main>
                {/* End Main Content */}
            </div>

            {/* Start Footer */}
            <Footer />
            {/* End Footer */}
        </>
    );
};

export default Dashboard;