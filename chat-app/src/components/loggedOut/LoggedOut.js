import React, { useState } from "react";
import "./LoggedOut.css";
import {
    Container,
    Tab,
    Tabs
} from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

function LoggedOutPage() {
    const [key, setKey] = useState("login");

    return (
        <Container className="loggedOutDiv shadow pb-4 px-3">
            {key === "login" ? (
                <h1 className="text-center py-4">Logga in</h1>
            ): (
                <h1 className="text-center py-4">Registrera dig</h1>
            )}
            <Tabs defaultActiveKey="login" id="loginRegister" activeKey={key} onSelect={(k) => setKey(k)} justify>
                <Tab className="loginDiv" eventKey="login" title="Inloggning">
                    <Login />
                </Tab>
                <Tab className="registerDiv" eventKey="register" title="Registrering">
                    <Register />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default LoggedOutPage;