import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Menu from "./components/menu";
import Footer from "./components/footer";

import Home from "./pages/home";
import Produtos from "./pages/produtos";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;