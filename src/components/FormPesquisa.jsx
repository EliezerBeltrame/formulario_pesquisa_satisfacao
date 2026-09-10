import { useState } from "react";

function FormPesquisa() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [satisfacao, setSatisfacao] = useState("neutro");
  const [comentario, setComentario] = useState("");
  const [aceiteTermos, setAceiteTermos] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Satisfação:", satisfacao);
    console.log("Comentário:", comentario);
    console.log("Aceitou os termos:", aceiteTermos);

    setNome("");
    setEmail("");
    setSatisfacao("neutro");
    setComentario("");
    setAceiteTermos(false);
  };

  return (
    <div className="formulario">
      <h1>Pesquisa de Satisfação</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </label>

        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </label>

        <p>Nível de satisfação:</p>

        <label>
          <input
            type="radio"
            name="satisfacao"
            value="insatisfeito"
            checked={satisfacao === "insatisfeito"}
            onChange={(e) => setSatisfacao(e.target.value)}
          />
          Insatisfeito
        </label>

        <label>
          <input
            type="radio"
            name="satisfacao"
            value="neutro"
            checked={satisfacao === "neutro"}
            onChange={(e) => setSatisfacao(e.target.value)}
          />
          Neutro
        </label>

        <label>
          <input
            type="radio"
            name="satisfacao"
            value="satisfeito"
            checked={satisfacao === "satisfeito"}
            onChange={(e) => setSatisfacao(e.target.value)}
          />
          Satisfeito
        </label>

        <label>
          <span>Comentário:</span>
          <textarea
            name="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Digite seu comentário"
          />
        </label>

        <label>
          <input
            type="checkbox"
            name="termos"
            checked={aceiteTermos}
            onChange={(e) => setAceiteTermos(e.target.checked)}
          />
          Aceito os termos de privacidade
        </label>

        <input
          type="submit"
          value="Enviar"
          disabled={!aceiteTermos}
        />
      </form>
    </div>
  );
}

export default FormPesquisa;