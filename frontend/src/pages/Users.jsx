import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";

const Users = ({ email }) => {
  const [userData, setUserData] = useState([[]]);
  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/`);
        console.log("response: ", response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Container className="mt-5">
      <div className="mt-5">
        {userData.map((user)=> {
          return (
            <Card>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {user.email}
              </Card.Subtitle>
              {user.card_id && (
                <Card.Text>Card ID: {user.card_id}</Card.Text>
              )}
            </Card.Body>
          </Card>
          )
        })}
      </div>
    </Container>
  );
};

export default Users;
