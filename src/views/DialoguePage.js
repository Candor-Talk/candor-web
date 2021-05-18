import 'bootstrap/dist/css/bootstrap.min.css';
import './../CandorClasses.css';
import './../BootstrapCustomizations.css';
import { Container, Col, Row } from 'react-bootstrap';
import DialogueCarousel from '../components/PostCarousel';
import DialogueInfoCard from '../components/DialogueInfoCard';
import DownloadPrompt from '../components/DownloadPrompt';
import { useSelector, useDispatch } from 'react-redux';
import { getDialogue, getPosts } from '../actions';

// Column layout constants
const colXs = 12;
const colMd = 4;

function DialoguePage({ match }) {
  const dialogueMetaData = useSelector(state => state.dialogueMetaData);
  const postsList = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const dialogueID = match.params.id;
  const postIndex = parseInt(match.params.index);

  if (dialogueID) {
    dispatch(getDialogue(dialogueID));
    dispatch(getPosts(dialogueID));
  }
  return (
    <div className="Dialogue">
      <Container fluid className="candor-container">
        <Row className="candor-row" style={{height:'90%'}}>
          <Col xs={colXs} md={colMd}>
           <DialogueInfoCard dialogueMetaData={dialogueMetaData}/>
          </Col>
          <Col xs={colXs} md={colMd}>
            <DialogueCarousel postsList={postsList} postIndex={postIndex} />
          </Col>
          <Col xs={colXs} md={colMd} className="text-center d-flex align-items-end pb-5">
            <DownloadPrompt />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DialoguePage;