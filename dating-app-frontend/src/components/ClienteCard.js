import React, { useEffect, useState } from "react";
import "./DatingCards.css";
import axios from "./axios";
import {
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";

const ClienteCard = () => {
  const [cliente, setClientes] = useState([]);

  async function fetchData() {
    const res = await axios.get("/implantacao/clientes");
    setClientes(res.json());
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="textSecondary" gutterBottom>
          {cliente["segmento"]}
        </Typography>
        <Typography variant="h5" component="div">
          {cliente["nome_cliente"]}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="green">
          {cliente["potencial"]}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {cliente["analista"]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </div>
  );
};

export default ClienteCard;
