export default function Cabecalho({ fotoPerfil, nomeUsuario, tempoCurtida }) {
  return (
    <div>
      <img className="perfil" src={fotoPerfil} />
      <h2>{nomeUsuario}</h2>
      <p>{tempoCurtida}</p>
      <span>...</span>
    </div>
  );
}
