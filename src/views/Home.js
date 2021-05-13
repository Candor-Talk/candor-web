import { Col } from 'react-bootstrap';
import StringLibrary from '../Libraries/StringLibrary.json';
import { Link } from 'react-router-dom';
import GooglePlayStoreButton from '../components/GooglePlayStoreButton.js';
import AppleAppStoreButton from '../components/AppleAppStoreButton.js';

const library = StringLibrary.Home;

const Home = () => {
    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '500px',
            }}
        >
                    <Col className="align-self-center text-center">
                        <img className="mb-3"  width={60}  alt='Candor logo' src='./images/CandorIcon.svg' />
                        <h1 className="my-2">{library.header}</h1>
                        <p>
                            {library.text1}
                            <br />
                            {library.text2}
                        </p>
                        <div className="candor-badge-margins">
                        <AppleAppStoreButton width={138}></AppleAppStoreButton>
                        <GooglePlayStoreButton width={180}></GooglePlayStoreButton>
                        </div>
                        <div className="candor-terms-privacy d-flex justify-content-center mt-3">
                            <Link to="/terms-of-service" style={{color:'white'}}>{library.termsOfService}</Link>
                            <span className="ml-3 mr-3">&#x2022;</span>
                            <Link to="/privacy-policy" style={{color:'white'}}>{library.privacyPolicy}</Link>
                        </div>
                    </Col>
        </div>
    )
}

export default Home
