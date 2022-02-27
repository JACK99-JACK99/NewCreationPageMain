import React from 'react';
import { Modal, Button, Col, Row, Container, Form, Alert } from 'react-bootstrap'

function SignIn(props) {
    const [modalShow, setModalShow] = React.useState(false);

    function inputHandler(e) {
        alert('your data is submitted')
    }

    return (
        <>

            <div className="m-1">
                <Form>
                    <Button variant="primary" className=' float-end m-3' onClick={() => setModalShow(true)}>
                        Sign-In
                    </Button>
                    <Button variant="success" className=' float-end m-3'>
                        Search
                    </Button>
                    <Form.Group className="m-3 w-50 float-end" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="search" placeholder="Search" />
                    </Form.Group>

                </Form>
            </div>

            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
        </>);

}

// function SignIn() {
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//         <>
//             <Button variant="primary" onClick={() => setModalShow(true)}>
//                 Launch vertically centered modal
//             </Button>

//             <ModalFunction
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </>
//     );
// }

// render(<App />);


export default SignIn;
