import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";

function Home() {
  const navegar = useNavigate();

  return (
  <main className="home">
    <section className="home-banner">
      <h1>Bem-vindo à LyonTec!</h1>

      <p>
        Aqui você encontra os melhores produtos
        de tecnologia com qualidade e preço justo.
      </p>

      <h2>Explore nosso catálogo!</h2>

      <Button
        texto="Ver produtos"
        acao={() => navegar("/produtos")}
      />
    </section>
  </main>
);
}

export default Home;
