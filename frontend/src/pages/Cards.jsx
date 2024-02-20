import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container, Row, Col } from "react-bootstrap";

const Cards = () => {
  const [cards, setCards] = useState([]);

  const cartoes = [
    { id: 1, balance: 100 },
    { id: 2, balance: 200 },
    { id: 3, balance: 300 },
    { id: 4, balance: 400 },
  ];

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("/api/cards");
        setCards(response.data);
      } catch (error) {
        console.error("Erro ao carregar cartões:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID do Cartão</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              {cartoes.map((card) => (
                <tr key={card.id}>
                  <td>{card.id}</td>
                  <td>{`R$ ${card.balance}`}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
