export default function Cabecalho({ fotoPerfil, nomeUsuario, tempoCurtida }) {
  return (
    <div>
      <img src={fotoPerfil} />
      <h2>{nomeUsuario}</h2>
      <p>{tempoCurtida}</p>
      <span>...</span>
    </div>
  );
}
