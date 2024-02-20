import React from "react";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardRegister from "./pages/CardRegister";
import Cards from "./pages/Cards";
import CardLinking from "./pages/CardLinking";
import Payment from "./pages/Payment";
import Deposit from "./pages/Deposit";
import Users from "./pages/Users";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<UserRegister></UserRegister>} />
          <Route path="/users" element={<Users></Users>} />
          <Route path="/" element={<Users></Users>} />
          <Route
            path="/card-register"
            element={<CardRegister></CardRegister>}
          />
          <Route path="/cards" element={<Cards></Cards>} />
          <Route path="/card-linking" element={<CardLinking></CardLinking>} />
          <Route path="/payment" element={<Payment></Payment>} />
          <Route path="/deposit" element={<Deposit></Deposit>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
