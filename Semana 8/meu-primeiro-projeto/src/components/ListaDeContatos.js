export default function ListaDeContatos({ photo, name, description }) {
  return (
    <div className="contactcard">
      <div>
        <img className="perfil" src={photo} alt="perfil" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
