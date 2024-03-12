import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Form, Dropdown, Table, Button, Alert, Tabs, Tab, Col, Row, Pagination } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function Innerpage() {
    const [showSuccessAlert, setShowSuccessAlert] = useState(true);
    const [showInfoAlert, setShowInfoAlert] = useState(true);
    const [showWarningAlert, setShowWarningAlert] = useState(true);
    const [showDangerAlert, setShowDangerAlert] = useState(true);

    return (
        <>
            <Helmet>
                <title>{'Admin Theme | Innerpage'}</title>
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
                    <h4 className="main-heading">Table Style</h4>

                    {/* Start Table Section */}
                    <div className="card">
                        <div className="card-header">Stories
                            <Dropdown className="card-menu" aria-labelledby="dropdownMenuButton2">
                                <Dropdown.Toggle id="dropdownMenuButton2" menuAlign="right" as="button">
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
                        <div className="card-body p-0">
                            <Table className="table data-grid" responsive>
                                <thead>
                                    <tr>
                                        <th className="text-left">Name</th>
                                        <th>Views</th>
                                        <th>Reads</th>
                                        <th>Read Ratio</th>
                                        <th>Recommend</th>
                                        <th className="text-left">Status</th>
                                        <th width="90" className="text-left">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="name text-left"><img src={process.env.PUBLIC_URL + '/assets/images/story-img1.png'} alt="Story Image1" />Lorem ipsum is dummy text</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>76%</td>
                                        <td>0</td>
                                        <td className="text-left">
                                            <span className="badge badge-success">Success</span>
                                        </td>
                                        <td className="action text-left">
                                            <a onClick={e => e.preventDefault()} href="-" title="Edit"><img src={process.env.PUBLIC_URL + '/assets/images/ic-edit.svg'} alt="Edit-icon" /></a> <a onClick={e => e.preventDefault()} href="-" title="Delete"><img src={process.env.PUBLIC_URL + '/assets/images/ic-delete.svg'} alt="Delete Icon" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="name text-left"><img src={process.env.PUBLIC_URL + '/assets/images/story-img2.png'} alt="Story Image2" />Lorem ipsum is dummy text</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>76%</td>
                                        <td>0</td>
                                        <td className="text-left">
                                            <span className="badge badge-danger">Pending</span>
                                        </td>
                                        <td className="action text-left">
                                            <a onClick={e => e.preventDefault()} href="-" title="Edit"><img src={process.env.PUBLIC_URL + '/assets/images/ic-edit.svg'} alt="Edit Icon" /></a> <a onClick={e => e.preventDefault()} href="-" title="Delete"><img src={process.env.PUBLIC_URL + '/assets/images/ic-delete.svg'} alt="Delete Icon" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="name text-left"><img src={process.env.PUBLIC_URL + '/assets/images/story-img3.png'} alt="Story Image3" />Lorem ipsum is dummy text</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>76%</td>
                                        <td>0</td>
                                        <td className="text-left">
                                            <span className="badge badge-warning">Cancelled</span>
                                        </td>
                                        <td className="action text-left">
                                            <a onClick={e => e.preventDefault()} href="-" title="Edit"><img src={process.env.PUBLIC_URL + '/assets/images/ic-edit.svg'} alt="Edit Icon" /></a> <a onClick={e => e.preventDefault()} href="-" title="Delete"><img src={process.env.PUBLIC_URL + '/assets/images/ic-delete.svg'} alt="Delete Icon" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="name text-left"><img src={process.env.PUBLIC_URL + '/assets/images/story-img4.png'} alt="Story Image4" />Lorem ipsum is dummy text</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>76%</td>
                                        <td>0</td>
                                        <td className="text-left">
                                            <span className="badge badge-success">Success</span>
                                        </td>
                                        <td className="action text-left">
                                            <a onClick={e => e.preventDefault()} href="-" title="Edit"><img src={process.env.PUBLIC_URL + '/assets/images/ic-edit.svg'} alt="Edit Icon" /></a> <a onClick={e => e.preventDefault()} href="-" title="Delete"><img src={process.env.PUBLIC_URL + '/assets/images/ic-delete.svg'} alt="Delete Icon" /></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="name text-left"><img src={process.env.PUBLIC_URL + '/assets/images/story-img5.png'} alt="Story Image5" />Lorem ipsum is dummy text</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>76%</td>
                                        <td>0</td>
                                        <td className="text-left">
                                            <span className="badge badge-danger">Pending</span>
                                        </td>
                                        <td className="action text-left">
                                            <a onClick={e => e.preventDefault()} href="-" title="Edit"><img src={process.env.PUBLIC_URL + '/assets/images/ic-edit.svg'} alt="Edit Icon" /></a> <a onClick={e => e.preventDefault()} href="-" title="Delete"><img src={process.env.PUBLIC_URL + '/assets/images/ic-delete.svg'} alt="Delete Icon" /></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            <Pagination className="float-right">
                                <Pagination.Item><img src={process.env.PUBLIC_URL + '/assets/images/ic-arrow-left.svg'} alt="Arrow Left" /></Pagination.Item>
                                <Pagination.Item>1</Pagination.Item>
                                <Pagination.Item active>2</Pagination.Item>
                                <Pagination.Item>3</Pagination.Item>
                                <Pagination.Item>4</Pagination.Item>
                                <Pagination.Item>5</Pagination.Item>
                                <Pagination.Item><img src={process.env.PUBLIC_URL + '/assets/images/ic-arrow-right.svg'} alt="Arrow Right" /></Pagination.Item>
                            </Pagination>

                        </div>
                    </div>
                    {/* End Table Section */}

                    {/* Start Form Section */}
                    <h4 className="main-heading">Form Style</h4>
                    <div className="card form-element">
                        <div className="card-body">
                            <h5 className="form-heading pt-0">One Column</h5>
                            <Form.Group>
                                <Form.Label>Textbox</Form.Label>
                                <Form.Control type="text"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Dropdown</Form.Label>
                                <select className="custom-select form-control">
                                    <option selected>selected</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <h5 className="form-heading">Two Column</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <Form.Group>
                                        <Form.Label>Textbox</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group>
                                        <Form.Label>Textbox</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group>
                                        <Form.Label>Textbox</Form.Label>
                                        <Form.Control type="text" disabled></Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group>
                                        <Form.Label>Focused</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </div>
                            </div>
                            <h5 className="form-heading">Four Column</h5>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <Form.Group>
                                        <Form.Label>Textbox</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <Form.Group>
                                        <Form.Label>Textbox</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <Form.Group>
                                        <Form.Label>Textbox</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <Form.Group>
                                        <Form.Label>Textbox</Form.Label>
                                        <Form.Control type="text"></Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <Form.Group>
                                        <Form.Label>Dropdown</Form.Label>
                                        <select className="custom-select form-control">
                                            <option selected>selected</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <Form.Group>
                                        <Form.Label>Dropdown</Form.Label>
                                        <select className="custom-select form-control">
                                            <option selected>selected</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <Form.Group>
                                        <Form.Label>Dropdown</Form.Label>
                                        <select className="custom-select form-control">
                                            <option selected>selected</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </Form.Group>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <Form.Group>
                                        <Form.Label>Dropdown</Form.Label>
                                        <select className="custom-select form-control">
                                            <option selected>selected</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </Form.Group>
                                </div>
                            </div>

                            {/* Start File Upload */}
                            <h5 className="form-heading">Other Elements</h5>
                            <div className="row">
                                <div className="col-xl-5">
                                    <Form.Group>
                                        <Form.Label>File Upload</Form.Label>
                                        <Form.File
                                            label="Upload File"
                                            custom
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-xl-7 pt-4">
                                    <div className="form-horizontal">
                                        <Form.Group as={Row} className="mb-0">
                                            <Form.Label column md="auto">File Upload:</Form.Label>
                                            <Col md="auto">
                                                <Form.File
                                                    label=""
                                                    custom
                                                />
                                            </Col>
                                        </Form.Group>
                                    </div>
                                    {/* <Form.Group>
                                        <Form.File
                                            custom
                                        />
                                    </Form.Group> */}
                                </div>
                            </div>
                            {/* End File Upload */}

                            {/* Start Check Box Section*/}
                            <Form.Group className="checkbox-block">
                                <Form.Label className="control-label d-block">Check Boxes</Form.Label>
                                <Form.Check
                                    label="Option 1"
                                    custom
                                    inline
                                    id="customCheck1"
                                    htmlFor='customCheck1'
                                />
                                <Form.Check
                                    label="Option 2"
                                    custom
                                    inline
                                    id="customCheck2"
                                    htmlFor='customCheck2'
                                />
                                <Form.Check
                                    label="Option 1"
                                    custom
                                    inline
                                    id="customCheck3"
                                    htmlFor='customCheck3'
                                />
                            </Form.Group>
                            {/* End Check Box Section*/}

                            {/* Start Radio Button Section*/}
                            <Form.Group className="radio-block">
                                <Form.Label className="control-label d-block">Radio Buttons</Form.Label>
                                <Form.Check
                                    label="Option 1"
                                    custom
                                    inline
                                    type="radio"
                                    id="customRadio1"
                                    htmlFor='customRadio1'
                                />
                                <Form.Check
                                    label="Option 2"
                                    custom
                                    inline
                                    type="radio"
                                    id="customRadio2"
                                    htmlFor='customRadio2'
                                />
                                <Form.Check
                                    label="Option 1"
                                    custom
                                    inline
                                    type="radio"
                                    id="customRadio3"
                                    htmlFor='customRadio3'
                                />
                            </Form.Group>

                            {/* End Radio Button Section*/}

                            <div className="btn-row">
                                <Button variant="primary">Primary</Button>
                                <Button className="btn-light">Secondary</Button>
                                <Form.Label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider" data-on="on" data-off="off"></span>
                                </Form.Label>
                            </div>

                            {/* Start Alert Section*/}
                            <div className="alert-block">
                                <Alert variant='success' show={showSuccessAlert}>
                                    <span className="alert-icon">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-alert-success.svg'} alt="Alert Icon" />
                                    </span>
							        This is a success message.
							        <button type="button" className="close-icon" onClick={() => setShowSuccessAlert(false)}>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-close.svg'} alt="Close Icon" />
                                    </button>
                                </Alert>
                                <Alert variant='primary' show={showInfoAlert}>
                                    <span className="alert-icon">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-alert-info.svg'} alt="Alert Icon" />
                                    </span>
                                    This is an info message.
                                    <button type="button" className="close-icon" onClick={() => setShowInfoAlert(false)}>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-close.svg'} alt="Close Icon" />
                                    </button>
                                </Alert>
                                <Alert variant='warning' show={showWarningAlert}>
                                    <span className="alert-icon">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-alert-warning.svg'} alt="Alert Icon" />
                                    </span>
                                    This is an alert message.
                                    <button type="button" className="close-icon" onClick={() => setShowWarningAlert(false)}>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-close.svg'} alt="Close Icon" />
                                    </button>
                                </Alert>
                                <Alert variant='danger' show={showDangerAlert}>
                                    <span className="alert-icon">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-alert-danger.svg'} alt="Alert Icon" />
                                    </span>
                                    This is an error message.
                                    <button type="button" className="close-icon" onClick={() => setShowDangerAlert(false)}>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/ic-close.svg'} alt="Close Icon" />
                                    </button>
                                </Alert>

                            </div>
                            {/* Start Alert Section*/}

                            {/* Start Tabs Section */}

                            <Tabs defaultActiveKey="tab1" className="tab-block">
                                <Tab eventKey="tab1" title="Maintenance 1">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Tab>
                                <Tab eventKey="tab2" title="Maintenance 2">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Tab>
                                <Tab eventKey="tab3" title="Maintenance 3">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Tab>
                                <Tab eventKey="tab4" title="Maintenance 4">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially</p>
                                </Tab>
                            </Tabs>
                            {/* End Tabs Section*/}
                        </div>
                    </div>
                    {/* End Form Section */}

                </main>
                {/* End Main Content */}
            </div>

            {/* Start Footer */}
            <Footer />
            {/* End Footer */}
        </>
    );
};

export default Innerpage;