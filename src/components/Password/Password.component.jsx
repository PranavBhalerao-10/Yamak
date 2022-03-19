import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Form, Button } from 'reactstrap'
import FormInput from '../Form-Input/FormInput.component'
import './Password.styles.scss'

const Password = () => {
    const navigate = useNavigate()
    return (
        <div className='sign_in'>
            <h2>Enter Password</h2>
            <br />
            <div className='forgot_password'>
                <Link to={'/'}>Forgot Password?</Link>
            </div>

            <Form>
                <FormInput type='password' name='password' placeholder='Password' />
            </Form>
            <div className='checkbox'>
                <input type='checkbox' className='regular-checked' /><span className='policy'>Don't ask for password on this device</span>
            </div>
            <br />
            <div className='button'>
                <Button color='primary' block onClick={() => navigate("/otp")}>Sign In</Button>
            </div>
            <br />
            <div className='button-inverted'>
                <Button color='primary' block onClick={() => navigate("/otp")}>Get an OTP on your Mobile</Button>
            </div>
            <br />
            <span className='account_ready'>Having Trouble Logging in? <Link to={'/'}>Get Help</Link></span>
        </div>
    )
}

export default Password