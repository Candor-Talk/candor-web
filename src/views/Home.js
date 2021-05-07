import { Container, Col, Row } from 'react-bootstrap';
import StringLibrary from '../StringLibrary.json';

const library = StringLibrary.Home;

const Home = () => {
    return (
        <div className="h-100">
            <Container className="h-100">
               <Row className="h-100">
                    <Col className="col-md-6 offset-md-3 align-self-center text-center">
                        <img className="mb-3"  width={60}  alt='Candor logo' src='./images/CandorIcon.svg' />
                        <h1 className="my-2">{library.header}</h1>
                        <p>
                            {library.text1}
                            <br />
                            {library.text2}
                        </p>
                        <div className="candor-badge-margins">
                        <a href='https://apps.apple.com/ca/app/candor-talk/id1552310457'>
                            <img width={132} alt='Get it on the App Store' src='./images/AppleBadge.svg' />
                        </a>
                        <a href='https://play.google.com/store/apps/details?id=com.talkcandor&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                            <img width={170} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
                        </a>
                        </div>
                        <div className="candor-terms-privacy d-flex justify-content-center mt-3">
                            <p>{library.termsOfService}</p>
                            <span className="ml-3 mr-3">&#x2022;</span>
                            <p>{library.privacyPolicy}</p>
                        </div>
          
                    </Col>
               </Row>
             </Container>
        </div>
    )
}

export default Home
