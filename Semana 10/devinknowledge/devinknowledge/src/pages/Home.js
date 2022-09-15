import './App.css';
import "./index.css"

function Home() {
  const totalcount = 0;
  const frontendcount = 0;
  const backendcount = 0;
  const fullstackcount = 0;
  const softskillcount = 0;

  return (
    <div>
      <section class="flex">
        <div id="boxinput">
          <div style={{ verticalAlign: 'bottom' }}>
            <img src="img/book.png" />
            <span>Devin</span>
            <span style={{ fontSize: '180%' }}>Knowledge</span>
          </div>
          <p style={{ textAlign: 'center' }}>Lean, Code and Save</p>
          <form id="form1">
            <label class="lab">Título</label>
            <br>
              <input
                id="title"
                type="text"
                size="30"
                minlength="8"
                maxlength="64"
                placeholder="Digite um título"
                required
              ></input>
            </br>
            <label>Linguagem/Skill</label>
            <br>
              <input
                id="language"
                type="text"
                size="30"
                minlength="4"
                maxlength="16"
                placeholder="Digite uma linguagem ou skill"
                required
              ></input>
            </br>
            <label>Categoria</label>
            <br>
              <select
                id="category"
                name="category"
                placeholder="Selecione uma categoria"
              >
                <option value="frontend">FrontEnd</option>
                <option value="backend">BackEnd</option>
                <option value="fullstack">FullStack</option>
                <option value="softskill">SoftSkill</option>
              </select>
            </br>
            <label>Descrição</label>
            <br>
              <textarea
                id="description"
                rows="10"
                cols="30"
                minlength="32"
                maxlength="512"
                placeholder="Escreva aqui o detalhamento da sua dica"
                required
              ></textarea>
            </br>
            <label>Vídeo do Youtube</label>
            <br>
              <input
                id="video"
                type="url"
                size="30"
                placeholder="Se tiver um link do Youtube cole aqui"
              ></input>
            </br>
            <div id="divbutton">
              <button id="btnclean" type="reset">
                Limpar
              </button>
              <button id="btnsave" type="submit">
                Salvar
              </button>
            </div>
          </form>
        </div>
        <div class="block">
          <div id="boxqtt">
            <div>
              <h5>Total</h5>
              <p id={totalcount}></p>
            </div>
            <div>
              <h5>FrontEnd</h5>
              <p id={frontendcount}></p>
            </div>
            <div>
              <h5>BackEnd</h5>
              <p id={backendcount}></p>
            </div>
            <div>
              <h5>FullStack</h5>
              <p id={fullstackcount}></p>
            </div>
            <div>
              <h5>SoftSkill</h5>
              <p id={softskillcount}></p>
            </div>
          </div>
          <div id="boxsearch">
            <input
              type="text"
              id="txtBusca"
              placeholder="Digite um título para buscar..."
            />
            <button type="submit">&#128269;</button>
            <button type="submit">&#10060;</button>
          </div>
          <div id="boxcards"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
