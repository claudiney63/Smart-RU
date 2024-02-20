import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputGroup } from "react-bootstrap";

const Payment = () => {
  const [cardId, setCardId] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post("/api/pay", {
        card_id: cardId,
        amount: amount,
      });
      console.log(response.data);
      setSuccess(true);
      navigate("/users");
    } catch (error) {
      console.error("Erro ao fazer pagamento:", error);
      if (error.response && error.response.status === 404) {
        setError(
          "Cartão não encontrado. Verifique o ID do cartão e tente novamente."
        );
      } else if (error.response && error.response.status === 402) {
        setError("Saldo insuficiente no cartão.");
      } else {
        setError("Erro ao fazer pagamento. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Realizar Pagamento</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && (
                <Alert variant="success">
                  Pagamento realizado com sucesso!
                </Alert>
              )}
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="cardId">
                  <Form.Label>ID do Cartão</Form.Label>
                  <Form.Control
                    type="text"
                    value={cardId}
                    onChange={(e) => setCardId(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Valor do Pagamento</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>R$</InputGroup.Text>
                    <Form.Control
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Pagar
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
