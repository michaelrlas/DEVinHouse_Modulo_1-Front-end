import Titulo from './components/titulo';
import CapsLock from './components/CapsLock';
import CapsLock2 from './components/CapsLock2';
import CartaoDePresente from './components/CartaoDePresente';
import Soma from './components/Soma';
import Post from './components/Post';
import Papai from './components/Papai';
import Botao from './components/botao';
import ListaDeContatos from './components/ListaDeContatos';
import Produtos from './components/Produto';
import './index.css';

function App() {
  return (
    <div>
      <Post
        fotoPerfil="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_960_720.jpg"
        nomeUsuario="Julieta"
        tempoCurtida="5min"
        comentario="baita sanduba"
        fotoPublicacao="https://assets.unileversolutions.com/recipes-v2/230446.jpg?imwidth=1600"
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

      <Botao corDeFundo="blue">eu sou um botão</Botao>

      <CartaoDePresente titulo="titulo cartao">
        parabens galera
      </CartaoDePresente>
      <Papai titulo="sou tiulo pai">
        <p>sou um children</p>
      </Papai>

      <ListaDeContatos
        photo="https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_960_720.jpg"
        name="Juma do Pantanal"
        description="Atriz da novela da Globo"
      />
      <ListaDeContatos
        photo="https://rollingstone.uol.com.br/media/_versions/legacy/2011/img-1000718-chuck-norris_widelg.jpg"
        name="Chuck Norris"
        description="Lenda viva do cinema"
      />

      <span className="productwrapper">
        <Produtos
          photo="https://epocacosmeticos.vteximg.com.br/arquivos/ids/398746-320-320/protetor-solar-kids-fps60-anasol-150g.jpg?v=637321414378830000"
          name="Missha All Around Safe Block Sebun Zero Sun"
          price="$ 4.00"
        />

        <Produtos
          photo="https://images.tcdn.com.br/img/img_prod/1016102/creme_hidratante_cetaphil_453g_galderma_1763_1_46338312cf8921875195da9ea8427fe2.jpg"
          name="Innisfree Green Tea Balancing Cream"
          price="$ 18.00"
        />

        <Produtos
          photo="https://d358a814b78lcf.cloudfront.net/Custom/Content/Products/10/08/1008112_crreme-hidratante-noturno-tracta-9092_l1_637293602943977434.jpg"
          name="Claires Cloud 9 Blanc De Whitening Cream"
          price="$ 12.00"
        />

        <Produtos
          photo="https://cdn.awsli.com.br/600x700/653/653431/produto/33508054/2f27109b45.jpg"
          name="Toymole Pure Eco Snail Moisture Gel"
          price="$ 8.00"
        />
        <Produtos
          photo="https://epocacosmeticos.vteximg.com.br/arquivos/ids/398746-320-320/protetor-solar-kids-fps60-anasol-150g.jpg?v=637321414378830000"
          name="Missha All Around Safe Block Sebun Zero Sun"
          price="$ 4.00"
        />

        <Produtos
          photo="https://images.tcdn.com.br/img/img_prod/1016102/creme_hidratante_cetaphil_453g_galderma_1763_1_46338312cf8921875195da9ea8427fe2.jpg"
          name="Innisfree Green Tea Balancing Cream"
          price="$ 18.00"
        />

        <Produtos
          photo="https://d358a814b78lcf.cloudfront.net/Custom/Content/Products/10/08/1008112_crreme-hidratante-noturno-tracta-9092_l1_637293602943977434.jpg"
          name="Claires Cloud 9 Blanc De Whitening Cream"
          price="$ 12.00"
        />

        <Produtos
          photo="https://cdn.awsli.com.br/600x700/653/653431/produto/33508054/2f27109b45.jpg"
          name="Toymole Pure Eco Snail Moisture Gel"
          price="$ 8.00"
        />
      </span>
    </div>
  );
}

export default App;
