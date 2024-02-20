import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container, Row, Col } from "react-bootstrap";

const Cards = () => {
  const [cards, setCards] = useState([]);

  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/cards/`);
        console.log(response.data);
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
              {cards.map((card) => (
                <tr key={card.id}>
                  <td>{card.id}</td>
                  <td>{`R$ ${parseFloat(card.balance).toPrecision(3)}`}</td>
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
