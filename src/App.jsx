import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <h1>Técnico em Desenvolvimento de Sistemas</h1>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#aprendizados">Aprendizados</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#mercado">Mercado</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div>
          <h2>Transforme ideias em sistemas</h2>
          <p>
            Aprenda programação, desenvolvimento web, banco de dados,
            versionamento e tecnologias modernas para construir seu futuro na
            área de TI.
          </p>
          <button>Conheça o Curso</button>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          alt="Tecnologia"
        />
      </section>

      <section id="sobre" className="secao">
        <h2>Sobre o Curso</h2>

        <p>
          O curso Técnico em Desenvolvimento de Sistemas prepara profissionais
          para criar aplicações, sites, sistemas e soluções tecnológicas.
          </p>

        <p>
          O profissional da área é responsável por desenvolver, testar,
          documentar e manter sistemas computacionais utilizados por empresas e
          usuários.
        </p>
      </section>

      <section id="aprendizados" className="secao">
        <h2>O que você aprende</h2>

        <div className="cards">
          <div className="card">Lógica de Programação</div>
          <div className="card">Desenvolvimento Web</div>
          <div className="card">Banco de Dados</div>
          <div className="card">Modelagam de Sistemas</div>
       </div>
      </section>

      <section id="tecnologias" className="secao">
        <h2>Tecnologias</h2>

        <div className="cards">
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">JavaScript</div>
          <div className="card">React</div>
          <div className="card">Node.js</div>
       </div>
      </section>

      <section id="mercado" className="secao">
        <h2>Áreas de Atuação</h2>

        <div className="cards">
          <div className="card">Desenvolvedor Frontend</div>
          <div className="card">Desenvolvedor Backend</div>
          <div className="card">Desenvolvedor Full Stack</div>
          <div className="card">Desenvolvimento de Aplicações</div>
          <div className="card">Banco de Dados</div>
          <div className="card">Modelagem de Sistemas</div>
      
        </div>
      </section>

      <section id="projetos" className="secao">
        <h2>Projetos que eu pode criar</h2>

        <div className="cards">
          <div className="card">Sistema de Cadastro</div>
          <div className="card">Controle de Estoque</div>
          <div className="card">Sistema de Agendamentos</div>
          <div className="card">Loja Virtual</div>
          <div className="card">Dashboard Administrativo</div>
          <div className="card">Aplicativo de Tarefas</div>
        </div>
      </section>

      <section className="cta">
        <h2>Seu futuro na tecnologia pode começar aqui</h2>

        <p>
          Conheça o curso Técnico em Desenvolvimento de Sistemas e desenvolva
          habilidades valorizadas pelo mercado de trabalho.
        </p>

        <button>Quero Saber Mais</button>
      </section>

      <footer>
        <p>
          Técnico em Desenvolvimento de Sistemas  SENAI  2026
        </p>

        <p>Aluno: Adimilson Júnior de Almeida Dorneles</p>
      </footer>
    </div>
  );
}

export default App;