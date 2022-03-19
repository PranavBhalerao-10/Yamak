import { Route, Routes } from 'react-router';
import './App.css';
import Password from './components/Password/Password.component';
import ResetPassword from './components/ResetPassword/ResetPassword.component';
import ResetPasswordOTP from './components/ResetPasswordOTP/ResetPasswordOTP.component';
import Signin from './components/Signin/Signin.component';
import SignUp from './components/SignUp/SignUp.component';
import VerifyOTP from './components/VerifyOTP/VerifyOTP.components';

function App() {
  return (
    <div className="App">
      <h2><span className='heading_text'>Yamak</span>.ai</h2>
      <Routes>
        <Route exact path='/login' element={<Signin />} />
        <Route exact path='/register' element={<SignUp />} />
        <Route exact path='/password' element={<Password />} />
        <Route exact path='/verifyOTP' element={<VerifyOTP />} />
        <Route exact path='/resetpasswordOTP' element={<ResetPasswordOTP />} />
        <Route exact path='/resetpassword' element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
