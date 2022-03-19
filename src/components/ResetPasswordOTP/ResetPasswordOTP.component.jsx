import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Form, Button } from 'reactstrap'
import FormInput from '../Form-Input/FormInput.component'
import Otpinput from '../OTPInput/OTPInput.component'
import './ResetPasswordOTP.styles.scss'


const ResetPasswordOTP = () => {
    const navigate = useNavigate()
    return (
        <div className='sign_in'>
            <h2>Reset Password</h2>
            <br />
            <div className="small_words">
                <span>Please enter OTP to reset Password</span>
            </div><br />
            <div className='small_words'>
                <span>Sent To +91XXXXXXXXXX   <Link to={() => navigate('/')}> Edit</Link></span>
            </div>
            <Form>
                <Otpinput />
            </Form>
            <span className='code_query'>Did't get the code? <Link to={'/'}>Resend</Link></span>
            <br />
            <Form>
                <FormInput type='password' name='password' placeholder='Password' />
                <FormInput type='password' name='Confirmpassword' placeholder='Re-enter New Password' />
            </Form>
            <div className='button'>
                <Button color='primary' block onClick={() => navigate("/login")}>Confirm Changes</Button>
            </div>
            <br />
            <span className='account_ready'>Having Trouble Logging in? <Link to={'/register'} style={{ fontWeight: "500" }}>Get Help</Link></span>
            <br />
            <span className='account_ready'><Link to={'/login'} style={{ fontWeight: "500" }}>Back To Sign in</Link></span>
        </div>
    )
}

export default ResetPasswordOTP;