import React, { useEffect, useState } from "react";
import axios from "./axios";
import {
  CardContent,
  CardActions,
  Typography,
  Button,
  Card,
  Box,
  Grid,
} from "@material-ui/core";
import { useParams } from "react-router";

const Cliente = () => {
  const [isLoading, setLoading] = useState(true);
  const [cliente, setCliente] = useState([]);
  const { id } = useParams();
  console.log(id);
  async function fetchCliente() {
    const res = await axios.get("/implantacao/clientes/" + id);
    setCliente(res.data);
    setLoading(false);
  }

  let formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    fetchCliente();
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
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Card style={{ width: "30vw", height: "500px" }} variant="outlined">
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
        </Card>
      </Grid>
    </div>
  );
};

export default Cliente;
