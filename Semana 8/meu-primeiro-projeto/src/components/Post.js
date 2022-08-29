import Cabecalho from './Cabecalho';

export default function Post({
  fotoPerfil,
  nomeUsuario,
  tempoCurtida,
  comentario,
  fotoPublicacao,
  likes,
  coments,
  share,
  quemCurtiu,
}) {
  return (
    <>
      <Cabecalho
        fotoPerfil={fotoPerfil}
        nomeUsuario={nomeUsuario}
        tempoCurtida={tempoCurtida}
      />
      <div>
        <span>{comentario}</span>
        <img src={fotoPublicacao} />
        <img src={likes}></img>
        <span>{coments}</span>
        <p>{share}</p>
        <p>{quemCurtiu}</p>
      </div>
    </>
  );
}
