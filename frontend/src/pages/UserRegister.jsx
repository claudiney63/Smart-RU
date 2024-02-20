import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const BASE_URL = "http://localhost:8080";

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post(`${BASE_URL}/user_register/`, {
        name,
        email,
        password,
      });
      console.log(response.data);
      setSuccess(true);
      navigate("/login");
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      setError(
        "Erro ao registrar usuário. Por favor, verifique os dados e tente novamente."
      );
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Registrar Usuário</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && (
                <Alert variant="success">Usuário registrado com sucesso!</Alert>
              )}
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Entrar
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserRegister;
