function Card(props) {
  return (
    <div className="Card">
      <img src={props.imagem} alt={props.titulo} />

      <h2>{props.titulo}</h2>

      <p>{props.descricao}</p>

      <strong>{props.preco}</strong>
    </div>
  );
}

export default Card;