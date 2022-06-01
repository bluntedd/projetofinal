import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Times from "./pages/times/Times";
import Campeonatos from "./pages/campeonatos/Campeonatos";
import Jogadores from "./pages/jogadores/Jogadores";
import CampeonatosLista from "./pages/campeonatos/CampeonatosLista";
import TimesLista from "./pages/times/TimesLista";
import JogadoresLista from "./pages/jogadores/JogadoresLista";
import EstadiosLista from "./pages/estadios/EstadiosLista";
import Estadios from "./pages/estadios/Estadios";
import Rankingjogadores from "./pages/rankingjogadores/Rankingjogadores";
import RankingjogadoresLista from "./pages/rankingjogadores/RankingjogadoresLista";






function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Times />} />
            <Route path="/times/create" element={<Times />} />
            <Route path="/times/:id" element={<Times />} />
            <Route path="/times" element={<TimesLista />} />
            <Route path="/campeonatos/create" element={<Campeonatos />} />
            <Route path="/campeonatos/:id" element={<Campeonatos />} />
            <Route path="/campeonatos" element={<CampeonatosLista />} />
            <Route path="/jogadores/create" element={<Jogadores />} />
            <Route path="/jogadores/:id" element={<Jogadores />} />
            <Route path="/jogadores" element={<JogadoresLista />} />
            <Route path="/estadios/create" element={<Estadios />} />
            <Route path="/estadios/:id" element={<Estadios />} />
            <Route path="/estadios" element={<EstadiosLista />} />
            <Route path="/rankingjogadores/create" element={<Rankingjogadores />} />
            <Route path="/rankingjogadores/:id" element={<Rankingjogadores />} />
            <Route path="/rankingjogadores" element={<RankingjogadoresLista />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;

