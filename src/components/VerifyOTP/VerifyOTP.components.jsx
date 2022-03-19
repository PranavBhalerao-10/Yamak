import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Form, Button } from 'reactstrap'
import OTP from '../OTPInput/OTPInput.component'
import './VerifyOTP.styles.scss'

const VerifyOTP = () => {
    const navigate = useNavigate()
    return (
        <div className='sign_in'>
            <h2>Verify OTP</h2>
            <br />
            <div className='small_words'>
                <span>Sent To +91XXXXXXXXXX <Link to={() => navigate('/')}>Edit</Link></span>
            </div>
            <Form>
                <OTP />
            </Form>
            <div className='checkbox'>
                <input type='checkbox' className='regular-checked' /><span className='policy'>Don't ask for OTP this device</span>
            </div>
            <br />
            <div className='button'>
                <Button color='primary' block onClick={() => navigate("/resetpassword")}>Generate OTP</Button>
            </div>
            <br />
            <span className='code_query' style={{ marginBottom: "10px" }}>Didn't get the code? <Link to={'/verifyOTP'}>Resend</Link></span>
            <div className='button-inverted'>
                <Button color='primary' block onClick={() => navigate("/login")}>Continue Using Password</Button>
            </div>
            <br />
            <span className='account_ready'>Having Trouble Logging in? <Link to={'/register'} style={{ fontWeight: "500" }}>Get Help</Link></span>

        </div>
    )
}

export default VerifyOTP