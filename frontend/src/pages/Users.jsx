import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";

const Users = ({ email }) => {
  const [userData, setUserData] = useState(null);
  const BASE_URL = "http://127.0.0.1:8080";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users`);
        console.log("response: ", response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, [email]);

  return (
    <Container className="mt-5">
      <div className="mt-5">
        {/* {userData && (
        <Card>
          <Card.Body>
            <Card.Title>{userData.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{userData.email}</Card.Subtitle>
            {userData.card_id && <Card.Text>Card ID: {userData.card_id}</Card.Text>}
          </Card.Body>
        </Card>
      )} */}
        <Card>
          <Card.Body>
            <Card.Title>{"João"}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {"joão@gmail.com"}
            </Card.Subtitle>
            {/* {userData.card_id && <Card.Text>Card ID: {userData.card_id}</Card.Text>} */}
            <Card.Text>Card ID: {"1"}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Users;
