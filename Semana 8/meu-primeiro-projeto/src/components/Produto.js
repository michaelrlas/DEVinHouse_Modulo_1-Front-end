export default function Produtos({ photo, name, price }) {
  return (
    <div className="productcard">
      <div>
        <img className="photoproduct" src={photo} alt="perfil" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}
