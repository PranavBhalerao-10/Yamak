import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import './ResetPassword.styles.scss'

const ResetPassword = () => {
    const navigate = useNavigate()
    return (
        <div className='sign_in'>
            <h2>Reset Password</h2>
            <br />
            <div className='checkbox'>
                <input type='checkbox' className='regular-checked' /><span className='policy'>Sent to +91XXXXXXXXXX</span>
            </div>
            <br />
            <div className='checkbox'>
                <input type='checkbox' className='regular-checked' /><span className='policy'>Sent to @gmail.com</span>
            </div>
            <br />
            <div className='button'>
                <Button color='primary' block onClick={() => navigate("/resetpasswordOTP")}>Generate OTP</Button>
            </div>
            <br />
            <span className='account_ready'>Having Trouble Logging in? <Link to={'/register'} style={{ fontWeight: "500" }}>Get Help</Link></span>
            <br />
        </div>
    )
}

export default ResetPassword;