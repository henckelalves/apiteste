import { Card } from "react-bootstrap";

const Costumer = () => {
  let formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  let jsontest = {
    num_oportunidade: 103513,
    cliente: "AREZZO",
    empresa: "Sequoia",
    segmento: "B2C - Leve",
    uf_origem: "RS",
    potencial: 320050,
    processo_implantacao: "Cliente Novo",
    situacao: "A implantar",
    won_iniciado: "Nao",
    area_entrada: "Comercial",
    analista: "Wesley Soares",
    regional: "Claudia Gimenes",
    inicio_implantacao: "2021-08-02T03:00:00.000Z",
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>
          <h4>{jsontest.cliente}</h4>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <h4>{jsontest.segmento}</h4>
            <h5 style={{ color: "green" }}>
              {formatter.format(jsontest.potencial)}
            </h5>
            <h6>{jsontest.num_oportunidade}</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Costumer;
