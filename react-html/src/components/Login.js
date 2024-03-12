import React from 'react';
import { Form } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <Helmet>
                <title>{'Admin Theme | Login Page'}</title>
            </Helmet>
            <div className="login-wrapper">
                <div className="login-inner">
                    <a onClick={e => e.preventDefault()} href="-" className="brand d-inline-block" title="DYW"><img src={process.env.PUBLIC_URL + 'assets/images/logo.png'} alt="Logo" />
                    </a>
                    {/* Start Login Form */}
                    <form action="">
                        <h2 className="login-header">Sign in</h2>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Username" aria-label="Username"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-0">
                            <Form.Control type="password" placeholder="Password" aria-label="Password"></Form.Control>
                        </Form.Group>
                        <div className="login-middle">
                            <Form.Check
                                custom
                                label='Remember Me'
                                id='customCheck1'
                                htmlFor='customCheck1'
                            />
                            <a onClick={e => e.preventDefault()} href="-" className="forgot-link" title="Forgot Password?">Forgot Password?</a>
                        </div>
                        <Link to='/Dashboard' type="submit" title="Login" className="btn btn-dark btn-block">Login</Link>
                    </form>
                    {/* End Login Form */}
                </div>
            </div>
        </>
    );
};
export default Login;