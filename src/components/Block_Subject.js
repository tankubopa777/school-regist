import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Block_subject() {
    return (
        <div>
            <Container className="bg-warning rounded-pill">
                <Row>
                    <Col className="p-3">CN210</Col>
                    <Col className="p-3">Computer Configuration</Col>
                    <Col className="p-3">760001</Col>
                    <Col className="p-3">Prof.Pao</Col>
                    <Col className="p-3">Quota</Col>
                    <Col className="p-3">checkbox</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Block_subject;