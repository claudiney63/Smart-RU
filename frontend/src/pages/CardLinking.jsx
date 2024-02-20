import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardLinking = () => {
  const [email, setEmail] = useState('');
  const [cardId, setCardId] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const BASE_URL = "http://127.0.0.1:8080";

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post(`${BASE_URL}/card_linking/`, { email, card_id: cardId });
      console.log(response.data);
      setSuccess(true);
      navigate('/users');
    } catch (error) {
      console.error('Erro ao vincular cartão:', error);
      setError('Erro ao vincular cartão. Verifique o e-mail e o ID do cartão e tente novamente.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Vincular Cartão</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">Cartão vinculado com sucesso!</Alert>}
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cardId">
                  <Form.Label>ID do Cartão</Form.Label>
                  <Form.Control type="text" value={cardId} onChange={(e) => setCardId(e.target.value)} required />
                </Form.Group>
                <Button variant="primary" type="submit">Vincular</Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardLinking;
