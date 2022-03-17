import mongoose from "mongoose";

const clienteSchema = mongoose.Schema(
  {
    num_oportunidade: String,
    nome_cliente: String,
    segmento: String,
    potencial: Number,
    analista: String,
    comercial: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

export default mongoose.model("Cliente", clienteSchema);
