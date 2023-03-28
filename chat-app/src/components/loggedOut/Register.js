import React from "react";
import {
    Form,
    InputGroup,
    Button
} from "react-bootstrap";

function Register() {

    return (
        <div className="px-3">
            <Form className="pt-4">
                <Form.Group className="pb-3" controlId="formUsername">
                    <InputGroup>
                        <InputGroup.Text>
                            <img id="usernameIcon" src="../images/person-fill.svg" alt="Username icon" width="20px" />
                        </InputGroup.Text>
                        <Form.Control type="" placeholder="Användarnamn" required/>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="pb-3" controlId="formUsername">
                    <InputGroup>
                        <InputGroup.Text>
                            <img id="emailIcon" src="../images/envelope-fill.svg" alt="Email icon" width="15px" />
                        </InputGroup.Text>
                        <Form.Control type="email" placeholder="Email" required/>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="pb-3" controlId="formPassword">
                    <InputGroup>
                        <InputGroup.Text>
                            <img id="passwordIcon" src="../images/key-fill.svg" alt="Password icon" width="20px" />
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Lösenord" required/>
                    </InputGroup>
                </Form.Group>
                <Form.Check type="checkbox" id="registerConsent" label="Jag samtycker..." />
                <div className="text-center loggedOutButton">
                    <Button variant="primary" type="submit" size="lg">
                        Registrera
                    </Button>
                    <p id="registerLink">
                        <a href="/">Redan registrerad?</a>
                    </p>
                </div>
            </Form>
        </div>
    )
}

export default Register;