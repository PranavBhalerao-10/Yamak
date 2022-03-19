import React from 'react'
import { Form, Button, Input } from 'reactstrap'
import AuthButtons from '../AuthButtons/AuthButtons.component'
import FormInput from '../Form-Input/FormInput.component'
import './Signup.styles.scss'
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();


    return (
        <div className='sign_in'>
            <h2>Create An Account</h2>
            <AuthButtons />
            <br />
            <Form>
                <div className='minimized'>
                    <Input type='text' name='fname' placeholder='First Name' className='minimized_input' />
                    <Input type='text' name='lname' placeholder='Last Name' className='minimized_input' />
                </div>
                <FormInput type='text' name='email' placeholder='Mobile Number/Email' />
                <FormInput type='password' name='password' placeholder='Password' />
                <div className='small_words'>
                    <span>It contains atleast 6-15 characters and 1 uppercase,lowercase,special characters and number</span>
                </div>
                <FormInput type='password' name='confirmpassword' placeholder='Re-enter Password' />
            </Form>
            <div className='checkbox'>
                <input type='checkbox' /><span className='regular-checked'></span><span className='policy'>Terms & Policy</span>
            </div>
            <br />
            <div className='button'>
                <Button block onClick={() => navigate("/login")}>Create An Account</Button>
            </div>
            <br />
            <span className='account_ready'>Already have an account? <Link to={'/login'}>Sign in</Link></span>
            <br />
        </div>

    )
}

export default SignUp