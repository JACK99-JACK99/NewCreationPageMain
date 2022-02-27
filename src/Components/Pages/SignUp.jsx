import React from 'react';
import { Modal, Button, Col, Row, Container, Form, Alert } from 'react-bootstrap'
import '../../App.css';

// export default function Services() {
//   return <h1 className='services'>SERVICES</h1>;
// }

function SignUp(props) {
  const [modalShow, setModalShow] = React.useState(props.value);

  function inputHandler(e) {
    alert('your data is submitted')
  }

  return (
    <>
      <div className="m-1">
        {/* </div> */}

        <Modal
          {...props}
          
          // show={modalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className='bg-primary text-light'>
            <Modal.Title id="contained-modal-title-vcenter">
              Sign in
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className=''>
            <Container>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onSubmit={() => inputHandler}>
                  Submit
                </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>);

}

function SignIn() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className='center_anything sign-up'>
        <Button variant="primary" onClick={() => setModalShow(true)} className='text.center'>
          Register Your Self
        </Button>
      </div>


      <SignUp
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

// render(<App />);
export default SignIn;
