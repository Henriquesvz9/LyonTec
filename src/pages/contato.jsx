import { useState } from "react";

function Contato() {
  const [enviado, setEnviado] = useState(false);

  function enviarMensagem(event) {
    event.preventDefault();
    setEnviado(true);
  }

  return (
    <main>
      <h1>Fale com a LyonTec</h1>

      <p>
        Tem alguma dúvida ou precisa de ajuda?
        Envie uma mensagem para nossa equipe!
      </p>

      <form className="form-contato" onSubmit={enviarMensagem}>
        <label htmlFor="nome">Nome completo</label>
        <input
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu melhor e-mail"
          required
        />

        <label htmlFor="mensagem">Sua mensagem</label>
        <textarea
          id="mensagem"
          placeholder="Como podemos ajudar?"
          rows="5"
          required
        />

        <button type="submit">
          Enviar mensagem
        </button>

        {enviado && (
          <p className="mensagem-sucesso">
            Mensagem enviada com sucesso! 💜
          </p>
        )}
      </form>
    </main>
  );
}

export default Contato;