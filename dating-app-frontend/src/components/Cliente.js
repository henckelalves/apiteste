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
import { useParams } from "react-router";

const Cliente = () => {
  const [isLoading, setLoading] = useState(true);
  const [clientes, setClientes] = useState([]);

  async function fetchData() {
    const res = await axios.get("/implantacao/clientes/" + params.id);
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
      <Box sx={{ minWidth: "33%", display: "inline-block" }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="textSecondary"
              gutterBottom
            >
              {clientes[0].segmento}
            </Typography>
            <Typography variant="h5" component="div">
              {clientes[0].nome_cliente}
            </Typography>
            <Typography sx={{ mb: 1.5 }} style={{ color: "#00AA00" }}>
              {formatter.format(clientes[0].potencial)}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="textSecondary">
              {clientes[0].analista}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      ))
    </div>
  );
};

export default Cliente;
