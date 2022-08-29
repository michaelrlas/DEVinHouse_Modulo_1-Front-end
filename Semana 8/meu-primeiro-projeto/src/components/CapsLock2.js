export default function CapsLock2({ children }) {
  const textoEmLetrasMaiusculas = children.toUpperCase();
  return <p>{textoEmLetrasMaiusculas} </p>;
}
