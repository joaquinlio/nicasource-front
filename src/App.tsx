import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ my: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
