// function CapsLock(props) {
//   const { textoEnviado, legal, cor } = props;
//   const textoEmLetrasMaiusculas = textoEnviado.toUpperCase();
//   return (
//     <div style={{ color: cor }}>
//       <p>
//         {textoEmLetrasMaiusculas}
//         {legal}
//       </p>
//     </div>
//   );
// }
function CapsLock({ textoEnviado, legal, cor }) {
  const textoEmLetrasMaiusculas = textoEnviado.toUpperCase();
  return (
    <div style={{ color: cor }}>
      <p>
        {textoEmLetrasMaiusculas}
        {legal}
      </p>
    </div>
  );
}

export default CapsLock;
