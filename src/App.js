import './App.css';
import {Container} from 'react-bootstrap'
import Display from './components/Display.js'
import Heading from './components/Heading';
import Comment from './components/Comment';

function App() {
  return (
    <Container className="App p-5">
    


    
      {/* <Heading/>

      <Row>
        <Col xs="6">
          <Display/>
        </Col>
      </Row> */}
      
      <Comment/>
    
    
    
    
    </Container>
  );
}

export default App;
