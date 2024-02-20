import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardRegister = () => {
  const [cardId, setCardId] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post('/api/card_register', { id: cardId });
      console.log(response.data);
      setSuccess(true);
      navigate('/cards');
    } catch (error) {
      console.error('Erro ao registrar cartão:', error);
      setError('Erro ao registrar cartão. Verifique o ID do cartão e tente novamente.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Registrar Cartão</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">Cartão registrado com sucesso!</Alert>}
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="cardId">
                  <Form.Label>ID do Cartão</Form.Label>
                  <Form.Control type="text" value={cardId} onChange={(e) => setCardId(e.target.value)} required />
                </Form.Group>
                <Button variant="primary" type="submit">Registrar</Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardRegister;
