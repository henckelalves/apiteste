import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClienteCard from "./components/ClienteCard";
import Cliente from "./components/Cliente";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClienteCard />}></Route>
        <Route path="/implantacao/clientes/:id" element={<Cliente />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
