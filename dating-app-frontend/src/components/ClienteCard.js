import React, { useEffect, useState } from "react";
import axios from "./axios";
import {
  CardContent,
  CardActions,
  Typography,
  Button,
  Card,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const ClienteCard = () => {
  const [isLoading, setLoading] = useState(true);
  const [clientes, setClientes] = useState([]);

  async function fetchData() {
    const res = await axios.get("/implantacao/clientes");
    setClientes(res.data);
    setLoading(false);
  }

  let formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <Box sx={{ minWidth: 275, display: "inline-block" }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            ></Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <div>
      {clientes.map((cliente) => (
        <Box sx={{ minWidth: "33%", display: "inline-block" }}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="textSecondary"
                gutterBottom
              >
                {cliente.segmento}
              </Typography>
              <Typography variant="h5" component="div">
                {cliente.nome_cliente}
              </Typography>
              <Typography sx={{ mb: 1.5 }} style={{ color: "#00AA00" }}>
                {formatter.format(cliente.potencial)}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="textSecondary">
                {cliente.analista}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={"/implantacao/clientes/" + cliente._id}>
                <Button size="small">Mais Informações</Button>
              </Link>
            </CardActions>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default ClienteCard;
