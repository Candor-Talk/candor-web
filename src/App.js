import 'bootstrap/dist/css/bootstrap.min.css';
import './CandorClasses.css';
import './BootstrapCustomizations.css';
import { Container, Col, Row } from 'react-bootstrap';
import DialogueCarousel from './components/DialogueCarousel';
import DialogueInfoCard from './components/DialogueInfoCard';
import DownloadPrompt from './components/DownloadPrompt';

// Column layout constants
const colXs = 12;
const colMd = 4;

function App() {
  return (
    <div className="h-100">
      <Container fluid className="h-100">
        <Row className="h-100" >
          <Col xs={colXs} md={colMd} className="candor-col-height">
           <DialogueInfoCard />
          </Col>
          <Col xs={colXs} md={colMd} className="candor-col-height">
            <DialogueCarousel />
          </Col>
          <Col xs={colXs} md={colMd} className="text-center d-flex align-items-end candor-col-height pb-5">
            <DownloadPrompt />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
