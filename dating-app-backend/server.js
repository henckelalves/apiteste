import express from "express";
import mongoose from "mongoose";
import Cliente from "./dbCliente.js";
import Cors from "cors";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb://localhost:27017/dating-app-mern";

// Middleware
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url);

//Api Endpoints

app.post("/implantacao/clientes", (req, res) => {
  const dbCliente = req.body;
  Cliente.create(dbCliente, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/implantacao/clientes", (req, res) => {
  Cliente.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/implantacao/clientes/:id", (req, res) => {
  let id = req.params.id;
  Cliente.findById(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`Listening on LocalHost: ${port}`));
