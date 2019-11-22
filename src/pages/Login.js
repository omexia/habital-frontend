import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getToken } from '../services/userServices';
import Auth from '../helpers/Auth';

const LoginWithHooks = (props) => {
    // in hooks means [value of the state, call for update the state]; 
    const [ValEmail, email] = useState('');
    const [ValPassword, password] = useState('');
    const [ValError, error] = useState(false);
    const [ValMessage, errorMessage] = useState('');

    function onChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        if (name === 'password') {
            password(value);
        } else {
            email(value);
        }
    }

    const authUser = (event) => {
        event.preventDefault();
         // CALL API SERVICES
         getToken({email: ValEmail, password: ValPassword})
         .then(responseData => {
             if(responseData.success === false) {
                 error(true);
                 errorMessage(responseData.message);
             } else {
                 error(false);
                 errorMessage('');
                 // Setup Auth info
                 Auth.login(responseData, () => {
                    props.history.push('/homes');
                 });
             }
         })
    };
    const ErrorHandler = () => {
        if (ValError) {
            return <h2>{ValMessage}</h2> ;
        }
        return '';
    };
        return (
            <div>
            <Navbar />
            <div className="container">
                <h2>
                Please Login User
                </h2>
                <input 
                    type="text" 
                    name="email" 
                    value={ValEmail}
                    placeholder="email" 
                    onChange={onChange}
                />
                <input 
                    type="password" 
                    name="password" 
                    value={ValPassword} 
                    placeholder="password" 
                    onChange={onChange}
                />
                <button onClick={authUser}>Login (please)</button>
                <div>
                    <ErrorHandler/>
                </div>
            </div>
        </div>
        );
};

export default withRouter(LoginWithHooks);
