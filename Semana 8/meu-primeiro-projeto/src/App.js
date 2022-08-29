import Titulo from './components/titulo';
import CapsLock from './components/CapsLock';
import CapsLock2 from './components/CapsLock2';
import CartaoDePresente from './components/CartaoDePresente';
import Soma from './components/Soma';
import Post from './components/Post';
import Papai from './components/Papai';

function App() {
  return (
    <div>
      <Post
        fotoPerfil="https://vocesa.abril.com.br/wp-content/uploads/2021/01/Dani-Almeida.jpg?quality=70&strip=info&w=650&resize=120,80"
        nomeUsuario="Julieta"
        tempoCurtida="5min"
        comentario="baita sanduba"
        fotoPublicacao="https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock-925x308.jpg"
        likes="https://img.icons8.com/color/48/000000/hearts.png"
        coments="coment"
        share="shares"
        quemCurtiu="Rosana"
      />
      <Titulo />
      <p>
        <em>Criar um projeto React é muito fácil 3</em>
        <CapsLock textoEnviado="teste de letras maiusculas" cor="blue" />
        <Soma num1={5} num2={7} />
      </p>

      <CapsLock2>Eu sou um texto filho</CapsLock2>

      <CartaoDePresente titulo="titulo cartao">
        parabens galera
      </CartaoDePresente>
      <Papai titulo="sou tiulo pai">
        <p>sou um children</p>
      </Papai>
    </div>
  );
}

export default App;
