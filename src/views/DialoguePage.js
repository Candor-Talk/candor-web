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
    <div className="h-100">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col xs={colXs} md={colMd} className="d-none d-sm-block">
           <DialogueInfoCard dialogueMetaData={dialogueMetaData}/>
          </Col>
          <Col xs={colXs} md={colMd} className="h-100 pb-3">
            <DialogueCarousel postsList={postsList} postIndex={postIndex} />
          </Col>
          <Col xs={colXs} md={colMd} className="text-center d-flex align-items-end candor-col-height pb-5">
            <DownloadPrompt />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DialoguePage;