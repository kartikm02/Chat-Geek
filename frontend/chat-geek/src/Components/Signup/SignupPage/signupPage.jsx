import "./signupPage.css";
import SignupImg from '../../../images/signupPage.png';
import SignupForm from '../Form/signupForm';

const SignupPage = () => {
    return (
        <div className="body">
            <div className="left">
                <div className="darkDes">
                </div>
                <div className="lightDes">
                </div>
                <img src={SignupImg} alt="Image2" />
            </div>
            <div className='right'>
                <SignupForm />
            </div>
        </div>
    )
}

export default SignupPage