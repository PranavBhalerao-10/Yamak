import React from 'react'
import './Auth.styles.scss'
const AuthButtons = () => {
    return (
        <div className='div_container'>
            <div id="gSignInWrapper">
                <div id="customBtn" >
                    <span class="icon"></span>
                    <span class="buttonText">Continue with Google</span>
                </div>
            </div>
            <div id="gSignInWrapper">
                <div id="customBtn" >
                    <span class="f_icon"></span>
                    <span class="buttonText">Continue with Facebook</span>
                </div>
            </div>
            <br />
            <hr />
            <span className='position'>Or</span>
        </div>
    )
}

export default AuthButtons;