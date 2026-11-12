import Card from "../components/card";

function Produtos() {
  const produtos = [
    {
      id: 1,
      titulo: "Notebook",
      descricao: "Ideal para trabalho e estudos.",
      preco: "R$ 3.500,00",
      imagem: "/imagens/notebook.jpg.jpeg"
    },
    {
      id: 2,
      titulo: "Smartphone",
      descricao: "Celular moderno e potente.",
      preco: "R$ 2.800,00",
      imagem: "/imagens/smartphone.jpg.jpeg"
    },
    {
      id: 3,
      titulo: "Headset",
      descricao: "Áudio de excelente qualidade.",
      preco: "R$ 250,00",
      imagem: "/imagens/headset.jpg.jpeg"
    },
    {
      id: 4,
      titulo: "Teclado Gamer",
      descricao: "Ideal para jogos e produtividade.",
      preco: "R$ 220,00",
      imagem: "/imagens/teclado gamer.jpg.jpeg"
    },
    {
      id: 5,
      titulo: "Mouse Gamer",
      descricao: "Precisão e conforto.",
      preco: "R$ 120,00",
      imagem: "/imagens/mouse.jpg.jpeg"
    },
    {
      id: 6,
      titulo: "Monitor",
      descricao: "Excelente qualidade de imagem.",
      preco: "R$ 950,00",
      imagem: "/imagens/monitor.jpg.jpeg"
    }
  ];

  return (
    <main>
      <h1>Nossos Produtos</h1>

      <div className="lista-produtos">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            titulo={produto.titulo}
            descricao={produto.descricao}
            preco={produto.preco}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </main>
  );
}

export default Produtos;