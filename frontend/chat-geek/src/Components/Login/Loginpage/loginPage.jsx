import './loginPage.css';
import Image1 from '../../../images/loginPage.png';
import LoginForm from '../Form/loginForm';


const LoginPage = () => {
    return (
        <div className="body">
            <div className='left'>
                <LoginForm />
            </div>
            <div className="right">
                <div className="rightCol">
                    <img src={Image1} alt="Image1" />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
