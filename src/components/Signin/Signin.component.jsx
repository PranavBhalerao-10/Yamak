import React from 'react'
import { Form, Button } from 'reactstrap'
import AuthButtons from '../AuthButtons/AuthButtons.component'
import FormInput from '../Form-Input/FormInput.component'
import './Signin.styles.scss'
import { useNavigate } from 'react-router-dom';
const Signin = () => {
    const navigate = useNavigate();


    return (
        <div className='sign_in'>
            <h2>Sign in <span className='h5'>Or</span> Sign up</h2>
            <AuthButtons />
            <Form>
                <FormInput type='text' name='email' placeholder='Mobile Number/Email' />
            </Form>
            <div className='checkbox'>
                <input type='checkbox' className='regular-checked' /><span className='policy'>Terms & Policy</span>
            </div>
            <br />
            <div className='button'>
                <Button color='primary' block onClick={() => navigate("/password")}>Generate OTP</Button>
            </div>
        </div>
    )
}

export default Signin